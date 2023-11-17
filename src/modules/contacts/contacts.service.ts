import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/contact.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class ContactsService {
  constructor(private prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    const findContact = await this.prisma.contact.findFirst({
      where: { email: createContactDto.email },
    });

    if (findContact) {
      throw new ConflictException('Contact already exists.');
    }

    const contact = new Contact();

    Object.assign(contact, {
      ...createContactDto,
    });

    await this.prisma.contact.create({
      data: { ...contact, client_id: createContactDto.client_id },
    });

    return plainToInstance(Contact, contact);
  }

  async findAll() {
    const contacts = await this.prisma.contact.findMany();

    return plainToInstance(Contact, contacts);
  }

  async findOne(id: string) {
    const findContact = await this.prisma.contact.findUnique({
      where: { id },
    });

    if (!findContact) {
      throw new NotFoundException('Contact does not exists.');
    }

    return plainToInstance(Contact, findContact);
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const findContact = await this.prisma.contact.findUnique({
      where: { id },
    });

    if (!findContact) {
      throw new NotFoundException('Contact does not exists.');
    }

    if (updateContactDto.email) {
      const emailExists = await this.prisma.contact.findFirst({
        where: { email: updateContactDto.email },
      });

      if (emailExists && emailExists.id !== id) {
        throw new ConflictException(
          'E-mail already registered for another contact.',
        );
      }
    }

    const updatedContact = await this.prisma.contact.update({
      where: { id },
      data: { ...updateContactDto },
    });

    return plainToInstance(Contact, updatedContact);
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
