import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  updatedAt: string;

  constructor() {
    this.id = randomUUID();
  }
}
