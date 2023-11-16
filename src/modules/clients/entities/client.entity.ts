import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  fullName: string;
  email: string;
  password: string;
  phone: string;
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.id = randomUUID();
  }
}
