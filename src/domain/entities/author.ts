import { Entity } from 'src/core/domain/Entity';
export type IAuthorProps = {
  name: string;
};
export class User extends Entity<IAuthorProps> {
  public name: string;
  public constructor(props: IAuthorProps) {
    super();
    this.name = props.name;
  }
}
