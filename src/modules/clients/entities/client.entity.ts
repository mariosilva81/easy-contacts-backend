import { randomUUID } from 'node:crypto';

export class Client {
  readonly id: string;
  completeName: string;
  password: string;
  phone: string;
  registrationDate: string;

  constructor() {
    this.id = randomUUID();
  }
}
