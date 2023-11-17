import { Module } from '@nestjs/common';
import { ClientsModule } from './modules/clients/clients.module';
import { ContactsModule } from './modules/contacts/contacts.module';
import { SessionModule } from './modules/session/session.module';

@Module({
  imports: [ClientsModule, ContactsModule, SessionModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
