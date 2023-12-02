import { Entity } from 'src/core/domain/Entity';

export type IBookProps = {
  id: string;
  title: string;
  authorId: string;
  theme: string;
};

export class Book extends Entity<IBookProps> {
  public id: string;
  public title: string;
  public authorId: string;
  public theme: string;
  public constructor(props: IBookProps) {
    super();
    this.id = props.id;
    this.title = props.title;
    this.authorId = props.authorId;
    this.theme = props.theme;
  }
}
