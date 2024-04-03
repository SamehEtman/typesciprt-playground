import axios, { AxiosPromise } from 'axios';

export class ApiSync {
  constructor(private apiRoot: string) {}
  fetch = (id: number): AxiosPromise => {
    return axios.get(`${this.apiRoot}/${id}`);
  };
}
