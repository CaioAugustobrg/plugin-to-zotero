# Módulo Author

O módulo Author é responsável por gerenciar operações relacionadas a autores em uma aplicação NestJS.

## Descrição

Este módulo oferece funcionalidades para lidar com operação 'read' de autores.

## Funcionalidades

- `AuthorService`: Contém a lógica de negócios relacionada aos autores.
- `AuthorController`: Lida com as requisições HTTP relacionadas aos autores.
- `PrismaAuthorRepository`: Implementação do contrato 'AuthorRepository' utilizando o Prisma para interagir com o banco de dados.
- `AuthorRepository`: Contrato daquilo que pode acontecer junto ao banco de dados.

## Instalação

1. Certifique-se de ter o Node.js e o NestJS instalados globalmente na sua máquina.
2. Clone este repositório.
3. No diretório do projeto, execute o comando `npm install` para instalar as dependências.

## Uso

Para utilizar este módulo em sua aplicação NestJS:

1. Importe o `AuthorModule` no módulo principal da sua aplicação ou no módulo onde deseja utilizar as funcionalidades de autor.
2. Injete os serviços necessários onde forem necessários na sua aplicação.

Exemplo de importação no AppModule:

```typescript
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthorModule } from './modules/author/author.module';
import { PrismaAuthorRepository } from './modules/author/repositories/prisma-author.repository';
import { AuthorRepository } from './modules/author/repositories/author.repository';


@Module({
  imports: [AuthorModule],
   providers: [
    PrismaService,
    {
      provide: AuthorRepository,
      useClass: PrismaAuthorRepository,
    },
  ],
})
export class AppModule {}
