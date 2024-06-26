import { View } from './View';
import { User, IUser } from '../models/User';

export class UserShow extends View<User, IUser> {
  template(): string {
    return `
      <div>
        <h1>User Detail</h1>
        <div>User Name: ${this.model.get('name')}</div>
        <div>User Age: ${this.model.get('age')}</div>
      </div>
    `;
  }
}
