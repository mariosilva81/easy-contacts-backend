import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Client } from './entities/client.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ClientsService {
  constructor(private prisma: PrismaService) {}

  async create(createClientDto: CreateClientDto) {
    const findClient = await this.prisma.client.findFirst({
      where: { email: createClientDto.email },
    });

    if (findClient) {
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
    const clients = await this.prisma.client.findMany();

    return plainToInstance(Client, clients);
  }

  async findOne(id: string) {
    const findClient = await this.prisma.client.findUnique({
      where: { id },
    });

    if (!findClient) {
      throw new NotFoundException('Client does not exists.');
    }

    return plainToInstance(Client, findClient);
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    const findClient = await this.prisma.client.findUnique({
      where: { id },
    });

    if (!findClient) {
      throw new NotFoundException('Client does not exists.');
    }

    const emailExists = await this.prisma.client.findFirst({
      where: { email: updateClientDto.email },
    });

    if (emailExists) {
      throw new ConflictException(
        'E-mail already registered for another client.',
      );
    }

    const updatedClient = await this.prisma.client.update({
      where: { id },
      data: { ...updateClientDto },
    });

    return plainToInstance(Client, updatedClient);
  }

  async remove(id: string) {
    const findClient = await this.prisma.client.findUnique({
      where: { id },
    });

    if (!findClient) {
      throw new NotFoundException('Client does not exists.');
    }

    await this.prisma.client.delete({
      where: { id },
    });
  }
}
