<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

# Fullstack Project Back-end

## Descrição

Backend em NestJS para cadastro de clientes com vínculo de contatos.

## Autor

Mario Silva

## Versão

1.0.0

## Scripts

- `build`: Compilação do projeto Nest.js.
- `format`: Formatação do código usando Prettier.
- `start`: Inicia o servidor Nest.js.
- `start:dev`: Inicia o servidor em modo de desenvolvimento com monitoramento de alterações.
- `start:debug`: Inicia o servidor em modo de depuração com monitoramento de alterações.
- `start:prod`: Inicia o servidor em modo de produção.
- `lint`: Executa o ESLint para linting e correção automática.

Execute os scripts utilizando `npm run` ou `yarn run`.

## Dependências

- @nestjs/common: ^10.0.0
- @nestjs/core: ^10.0.0
- @nestjs/jwt: ^10.2.0
- @nestjs/mapped-types: *
- @nestjs/passport: ^10.0.2
- @nestjs/platform-express: ^10.2.8
- @prisma/client: ^5.6.0
- bcryptjs: ^2.4.3
- class-transformer: ^0.5.1
- class-validator: ^0.14.0
- passport-jwt: ^4.0.1
- reflect-metadata: ^0.1.13
- rxjs: ^7.8.1

## Dependências de Desenvolvimento

- @nestjs/cli: ^10.0.0
- @nestjs/schematics: ^10.0.0
- @types/bcryptjs: ^2.4.6
- @types/express: ^4.17.17
- @types/node: ^20.3.1
- @types/passport-jwt: ^3.0.13
- @types/supertest: ^2.0.12
- @typescript-eslint/eslint-plugin: ^6.0.0
- @typescript-eslint/parser: ^6.0.0
- eslint: ^8.42.0
- eslint-config-prettier: ^9.0.0
- eslint-plugin-prettier: ^5.0.0
- prettier: ^3.0.0
- prisma: ^5.6.0
- source-map-support: ^0.5.21
- supertest: ^6.3.3
- ts-loader: ^9.4.3
- ts-node: ^10.9.1
- tsconfig-paths: ^4.2.0
- typescript: ^5.1.3

## Instalação

1. Clone o repositório: `git clone https://github.com/seu-usuario/m6-fullstack-project-backend.git`
2. Instale as dependências: `npm install` ou `yarn install`

## Configuração do Ambiente

Certifique-se de configurar as variáveis de ambiente necessárias no arquivo `.env` usando com base o `.env.example` localizado na raiz do projeto.

## Configuração do Banco de Dados PostgreSQL usando Prisma

Execute as migrações do Prisma: `npx prisma migrate dev`

## Executando o Projeto

Execute o seguinte comando para iniciar o servidor:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

O servidor local estará acessível em [http://localhost:3000](http://localhost:3000). 
Observação: A porta poderá ser diferente caso tenha configurado de outra forma no `.env`.

## Estrutura do Projeto

A estrutura (vide abaixo) foi toda baseada em NestJS. Foi desenvolvida usando TypeScript e elementos de Programação Orientada a Objetos.

- `module`: tem a função de organizar e encapsular componentes relacionados, como controllers, services e providers.
- `service`: responsável por executar interagir com o banco de dados e fornecer funcionalidades específicas para os controllers ou outros services.
- `controller`: responsável ​​por lidar com a entrada de solicitações do cliente, como GET, POST, PATCH e DELETE.
- `entity`: refere-se ao modelo de dados que representa as tabelas do banco de dados. 
- `dto`: tem como objetivo transferir dados entre os controllers e os services.

## Endpoints

- `/session/login`: Endpoint para realizar o login e obter token de acesso.
- `/clients`: Endpoint para obter a lista de clientes (rota autenticada, exceto para criação de clientes).
- `/contacts`: Endpoint para obter a lista de contatos (rota autenticada).

Verifique o arquivo `insomnia.json` disponibilizado na raiz do projeto. Nele estão contidas todas as rotas e métodos HTTP disponíveis na aplicação, para requisições local e deploy.

## Contato

Para questões ou sugestões, entre em contato através do email mariosilva.81@icloud.com.