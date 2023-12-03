// app.module.ts

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
