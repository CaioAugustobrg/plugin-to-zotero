import { Injectable } from '@nestjs/common';
import { Author } from '../models/author.model';
import { PrismaAuthorRepository } from '../repositories/prisma-author.repository';
import { FindAuthorDTO } from '../dtos/find-author.request';
import { type HttpRequest, type HttpResponse } from 'src/ports/http';
import ApiError from 'src/utils/apiError';

@Injectable()
export class AuthorService {
  constructor(
    private readonly prismaAuthorRepository: PrismaAuthorRepository,
  ) {}

  async handle(httpRequest: FindAuthorDTO): Promise<Author | HttpResponse> {
    const findAuthor = await this.prismaAuthorRepository.findAuthorByName(
      httpRequest.name,
    );
    if (!findAuthor) {
      throw new ApiError({
        code: 404,
        message: 'Nenhum autor encontrado',
      });
    }
    console.log('service', findAuthor);
    return findAuthor as Author;
  }
}
