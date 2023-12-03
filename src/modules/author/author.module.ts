import { Module } from '@nestjs/common';
import { AuthorService } from './services/author.service';
import { AuthorController } from './controllers/author.controller';
import { PrismaAuthorRepository } from './repositories/prisma-author.repository';
import { AuthorRepository } from './repositories/author.repository';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [AuthorController],
  providers: [
    PrismaService,
    AuthorService,
    PrismaAuthorRepository,
    AuthorRepository,
  ],
})
export class AuthorModule {}
