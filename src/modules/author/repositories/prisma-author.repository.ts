import { Injectable } from '@nestjs/common';
import { Author } from '../models/author.model';
import { AuthorRepository } from './author.repository';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PrismaAuthorRepository implements AuthorRepository {
  constructor(private prisma: PrismaService) {}
  async findAuthorById(id: string): Promise<Author | null> {
    return (await this.prisma.author.findUnique({
      where: { id },
    })) as Author | null;
  }
}