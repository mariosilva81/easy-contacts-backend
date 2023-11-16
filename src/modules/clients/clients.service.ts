import { ConflictException, Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Client } from './entities/client.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const findUser = this.prisma.client.findFirst({
      where: { email: createClientDto.email },
    });

    if (findUser) {
      throw new ConflictException('Client already exists.');
    }

    const client = new Client();

    Object.assign(client, {
      ...createClientDto,
    });

    await this.prisma.client.create({
      data: { ...client },
    });

    return plainToInstance(Client, client);
  }

  async findAll() {
    return `This action returns all clients`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} client`;
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return `This action updates a #${id} client`;
  }

  async remove(id: string) {
    return `This action removes a #${id} client`;
  }
}
