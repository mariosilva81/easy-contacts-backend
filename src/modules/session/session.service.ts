import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/prisma.service';
import { compare } from 'bcryptjs';

@Injectable()
export class SessionService {
  constructor(
    private jwt: JwtService,
    private prisma: PrismaService,
  ) {}

  async create(createSessionDto: CreateSessionDto) {
    const { email, password } = createSessionDto;

    const client = await this.prisma.client.findUnique({
      where: { email },
    });

    if (!client) {
      throw new UnauthorizedException('Client credentials do not match.');
    }

    const isPasswordValid = await compare(password, client.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Client credentials do not match.');
    }

    const token = this.jwt.sign(
      { sub: client.id },
      { expiresIn: Number(process.env.JWT_EXPIRES_IN)! },
    );

    const { id, full_name, phone } = client;

    return {
      access_token: {
        token,
        message: `The generated token will expire in ${
          Number(process.env.JWT_EXPIRES_IN) / 60 / 60
        } hour(s)`,
      },
      client: {
        id,
        full_name,
        email,
        phone,
      },
    };
  }
}
