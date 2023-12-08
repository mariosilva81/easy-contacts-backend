import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true }),
    new ValidationPipe({
      transform: true,
      transformOptions: { groups: ['transform'] },
    }),
  );

  app.enableCors({
    origin: 'https://easy-contacts-tan.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Fullstack Project Back-end')
    .setDescription(
      'Backend em NestJS para cadastro de clientes com vínculo de contatos.',
    )
    .setVersion('1.0.0')
    .addTag('login')
    .addTag('clients')
    .addTag('contacts')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('doc', app, document);

  const port = Number(process.env.PORT) || 3001;

  await app.listen(port);
}

bootstrap();
