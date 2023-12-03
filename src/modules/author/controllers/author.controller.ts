import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { FindAuthorDTO } from '../dtos/find-author.request';
import { AuthorService } from '../services/author.service';
//import { HttpRequest } from 'src/ports/http';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async findAuthor(@Body() findAuthorDTO: FindAuthorDTO) {
    try {
      console.log('controller', findAuthorDTO.name);
      return await this.authorService.handle({
        name: findAuthorDTO.name,
      });
    } catch (error: any) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
  }
}
