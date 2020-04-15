import BaseAxios from "./BaseAxios";
import { BASE_URL } from "@/utils/config";

export default class BaseApi extends BaseAxios {

  apiNameModule = "";

  constructor(apiNameModule) {
    super(BASE_URL);
    this.apiNameModule = apiNameModule;
  }

  getUrlApi(url) {
    return `${this.apiNameModule}${url}`;
  }

  async getList(params) {
    return this.get(this.getUrlApi('/'), params);
  }

  async create(body) {
    return this.post(this.getUrlApi('/'), body);
  }

  async update(id, body) {
    return this.patch(this.getUrlApi(`/${id}`), body);
  }

  async delete(id) {
    return this.patch(this.getUrlApi(`/${id}`));
  } 
}