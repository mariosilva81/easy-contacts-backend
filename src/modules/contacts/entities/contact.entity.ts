import { randomUUID } from 'node:crypto';

export class Contact {
  readonly id: string;
  full_name!: string;
  email!: string;
  phone!: string;
  created_at!: string;
  updated_at!: string;

  constructor() {
    this.id = randomUUID();
  }
}
