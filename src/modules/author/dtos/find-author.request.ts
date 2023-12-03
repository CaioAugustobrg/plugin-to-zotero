import { IsNotEmpty, IsString } from 'class-validator';
import { Book } from 'src/modules/book/models/book.model';

export class FindAuthorDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  book?: Book[];
}
