import { Author } from '../models/author.model';

export interface AuthorRepository {
  findAuthorByName: (name: string) => Promise<Author | null>;
}
