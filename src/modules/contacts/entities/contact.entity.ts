import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  completeName: string;
  phone: string;
  registrationDate: string;

  constructor() {
    this.id = randomUUID();
  }
}
