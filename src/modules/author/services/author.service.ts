import { Injectable } from '@nestjs/common';
import { Author } from '../models/author.model';
import { PrismaAuthorRepository } from '../repositories/prisma-author.repository';
import { FindAuthorDTO } from '../dtos/find-author.request';
import { type HttpRequest, type HttpResponse } from 'src/ports/http';
import ApiError from 'src/utils/apiError';
interface TypedRequest<T> extends HttpRequest {
  body: T;
}
@Injectable()
export class AuthorService {
  constructor(
    private readonly prismaAuthorRepository: PrismaAuthorRepository,
  ) {}

  async handle(
    HttpRequest: TypedRequest<FindAuthorDTO>,
  ): Promise<Author | HttpResponse> {
    const { name } = HttpRequest.body;

    const findAuthor = await this.prismaAuthorRepository.findAuthorByName(name);
    if (!findAuthor) {
      throw new ApiError({
        code: 404,
        message: 'Nenhum autor encontrado',
      });
    }
    return findAuthor;
  }
}
