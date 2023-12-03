import { Injectable } from '@nestjs/common';
import { Author } from '../models/author.model';
@Injectable()
export class AuthorRepository {
  findAuthorByName: (name: string) => Promise<Author | null>;
}
