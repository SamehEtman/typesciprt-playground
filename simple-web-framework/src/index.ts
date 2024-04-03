import { ApiSync } from './models/ApiSync';
import { Attributes } from './models/Attributes';
import { IUser } from './models/User';

const attr = new Attributes({
  age: 12,
  name: 'sameh',
});

const a = attr.get('name')

console.log(a)