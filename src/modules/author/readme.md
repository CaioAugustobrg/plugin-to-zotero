# Módulo Author

O módulo Author é responsável por gerenciar operações relacionadas a autores em uma aplicação NestJS.

## Descrição

Este módulo oferece funcionalidades para lidar com operação 'read' de autores.

## Funcionalidades

- `AuthorService`: Contém a lógica de negócios relacionada aos autores.
- `AuthorController`: Lida com as requisições HTTP relacionadas aos autores.
- `PrismaAuthorRepository`: Implementação do contrato 'AuthorRepository' utilizando o Prisma para interagir com o banco de dados.

## Estrutura do Módulo

### DTOs (Data Transfer Objects)

DTOs são utilizados para transferir dados entre o cliente e o servidor, geralmente para definir a estrutura dos dados que serão transmitidos. Neste módulo, os seguintes DTOs são utilizados:

- `FindAuthorDTO`: Define a estrutura para procurar um autor.


### Modelos (Models)

Os modelos (ou entidades) representam a estrutura dos dados dentro da aplicação. Neste módulo, os seguintes modelos são utilizados:

- `AuthorModel`: Define a estrutura de dados para um autor, incluindo propriedades como id, nome, e relacionamentos com livros ou outras informações relevantes.

### Contrato (Contract)

- `AuthorRepository`: Este é o contrato que define as operações disponíveis para interagir com os dados de autores. 

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
