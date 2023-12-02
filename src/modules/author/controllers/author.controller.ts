import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { FindAuthorDTO } from '../dtos/find-author.request';
import { AuthorService } from '../services/author.service';
import { HttpRequest } from 'src/ports/http';
interface TypedRequest<T> extends HttpRequest {
  body: T;
}
@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async findAuthor(@Body() findAuthorDTO: TypedRequest<FindAuthorDTO>) {
    try {
      const foundAuthor = await this.authorService.handle(findAuthorDTO);

      if (foundAuthor) {
        return { message: 'Author found', author: foundAuthor };
      } else {
        return { message: 'Author not found' };
      }
    } catch (error) {
      return { error: 'Failed to find author' };
    }
  }
}
