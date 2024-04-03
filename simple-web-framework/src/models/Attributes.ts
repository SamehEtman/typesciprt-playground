export class Attributes<T> {
  constructor(private data: T) {}
  get = <K extends keyof T>(propName: K): T[K] => {
    return this.data[propName];
  };
  set = (attr: T) => {
    Object.assign(this.data || {}, attr);
  };
}
