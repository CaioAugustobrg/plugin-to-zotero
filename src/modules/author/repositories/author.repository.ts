import { Author } from '../models/author.model';

export interface AuthorRepository {
  findAuthorById: (id: string) => Promise<Author | null>;
}
