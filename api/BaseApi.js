import BaseAxios from "./BaseAxios";
import { BASE_URL_PROD } from "@/utils/config";
import Cookie from "@/utils/Cookie"

export default class BaseApi {

  apiNameModule = "";

  constructor(apiNameModule) {
    this.apiNameModule = apiNameModule;
    this.axios = new BaseAxios(BASE_URL_PROD);
    this.cookie = new Cookie();
    
    const listDefaultHeadersAxios = this.getDefaultHeadersAxios();
    console.log(listDefaultHeadersAxios);
    this.axios.setDefaultHeaders(listDefaultHeadersAxios);
  }

  getDefaultHeadersAxios() {
    return [
      {
        name: 'Authorization',
        value: `Bearer ${this.cookie.getCookie("token")}`
      }
    ]
  }

  getUrlApi = (url = "") => {
    return `${this.apiNameModule}${url}`;
  }

  getList = async (params) => {
    console.log(params);
    return this.axios.get(this.getUrlApi(), params);
  }

  getOne = async (id, params) => {
    return this.axios.get(this.getUrlApi(`/${id}`), params);
  }

  create = async (body) => {
    return this.axios.post(this.getUrlApi('/'), body);
  }

  update = async (id, body) => {
    return this.axios.patch(this.getUrlApi(`/${id}`), body);
  }

  delete = async (id) => {
    return this.axios.remove(this.getUrlApi(`/${id}`));
  }
}