import { Entity } from 'src/core/domain/Entity';
import { Book } from 'src/modules/book/models/book.model';

export type IAuthorProps = {
  id: string;
  name: string;
  book?: Book[];
};

export class Author extends Entity<IAuthorProps> {
  public id: string;
  public name: string;
  public book?: Book[];

  public constructor(props: IAuthorProps) {
    super();
    this.id = props.id;
    this.name = props.name;
    this.book = props.book;
  }
}
