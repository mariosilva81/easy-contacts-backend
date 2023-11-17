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

    const accessToken = this.jwt.sign({ sub: client.id });

    return {
      access_token: accessToken,
      client: client,
    };
  }
}
