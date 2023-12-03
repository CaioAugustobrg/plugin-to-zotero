// app.module.ts

import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service'; // Importe o PrismaService aqui
import { AuthorModule } from './modules/author/author.module';
import { PrismaAuthorRepository } from './modules/author/repositories/prisma-author.repository';
import { AuthorRepository } from './modules/author/repositories/author.repository';

@Module({
  imports: [AuthorModule],
  providers: [
    PrismaService, // Adicione o PrismaService aos provedores do AppModule
    {
      provide: AuthorRepository,
      useClass: PrismaAuthorRepository,
    },
    // Outros provedores e serviços aqui...
  ],
})
export class AppModule {}
