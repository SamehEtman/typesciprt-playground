import { User } from './models/User';
import { UserEdit } from './views/UserEdit';
import { View } from './views/View';

const user = User.buildUser({
  name: 'NAME',
  age: 12,
});

const userEdit = new UserEdit(document.querySelector('#root') as Element, user);

userEdit.render();
