import axios, { AxiosPromise } from 'axios';

interface HasId {
  id?: string;
}

export class ApiSync<T extends HasId> {
  constructor(private apiRoot: string) {}
  fetch = (id: string): AxiosPromise => {
    return axios.get(`${this.apiRoot}/${id}`);
  };

  fetchAll = (): AxiosPromise => {
    return axios.get(this.apiRoot);
  };
  save = (attr: T): AxiosPromise => {
    const { id } = attr;
    if (id) {
      return axios.put(`${this.apiRoot}/${id}`, attr);
    } else {
      return axios.post(this.apiRoot, attr);
    }
  };
}
