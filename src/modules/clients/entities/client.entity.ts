import { Contact } from '@prisma/client';
import { Exclude, Expose } from 'class-transformer';
import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  full_name!: string;
  email!: string;
  phone!: string;
  created_at!: string;
  updated_at!: string;

  @Exclude()
  password!: string;

  constructor() {
    this.id = randomUUID();
  }
}
