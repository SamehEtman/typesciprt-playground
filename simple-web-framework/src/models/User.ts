import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing';
import { Model } from './Model';

export interface IUser {
  id?: string;
  name?: string;
  age?: number;
}

export class User extends Model<IUser> {
  static buildUser(attr: IUser): User {
    return new User(
      new Eventing(),
      new ApiSync('http://localhost:3000/users'),
      new Attributes(attr),
    );
  }

  setRandomAge() {
    
  }
}
