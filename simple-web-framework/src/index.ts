import { ApiSync } from './models/ApiSync';
import { Attributes } from './models/Attributes';
import { IUser, User } from './models/User';

const user = User.buildUser({
  age: 12,
  name: 'sameh',
});

console.log(user.get('name'));
user.on('change', () => {
  console.log('change fired');
});

user.set({ name: 'banana' });

user.save();
console.log(user);
