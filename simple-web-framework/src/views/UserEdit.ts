import { View } from './View';
import { User, IUser } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, IUser> {
  regionsMap(): { [key: string]: string } {
    return {
      userShow: '.user-show',
      userForm: '.user-form'
    };
  }

  onRender(): void {
    console.log(this.regions.userShow)
    new UserShow(this.regions.userShow, this.model).render();
    new UserForm(this.regions.userForm, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div class="user-show"></div>
        <div class="user-form"></div>
      </div>
    `;
  }
}
