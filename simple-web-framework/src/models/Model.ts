import { AxiosPromise, AxiosResponse } from 'axios';
import { Callback } from './Eventing';
import { HasId } from './ApiSync';

interface IEventing {
  on: (eventName: string, callback: Callback) => void;
  trigger: (eventName: string) => void;
}

interface ISync<T extends HasId> {
  fetch: (id: string) => AxiosPromise;
  save: (attr: T) => AxiosPromise;
}

interface IAttributes<T> {
  get: <K extends keyof T>(propName: K) => T[K];
  set: (attr: T) => void;
  getAll: () => T;
}
export class Model<T extends HasId> {
  constructor(
    private events: IEventing,
    private sync: ISync<T>,
    private attr: IAttributes<T>,
  ) {}

  // pass through
  on = this.events.on;
  trigger = this.events.trigger;
  get = this.attr.get;

  set = (attr: T) => {
    this.attr.set(attr);
    this.trigger('change');
  };

  fetch = () => {
    const id = this.get('id');
    if (!id) throw new Error('can not fetch without id');
    this.sync
      .fetch(id)
      .then((res: AxiosResponse) => {
        this.set(res.data);
      })
      .catch(() => {
        this.trigger('error');
      });
  };

  save = () => {
     this.sync
      .save(this.attr.getAll())
      .then(() => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  };
}
