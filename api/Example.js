import BaseApi from "./BaseApi";

export default class Example extends BaseApi {

  constructor() {
    const module = '/auth/login';
    super(module);
  }

}