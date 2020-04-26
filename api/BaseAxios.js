import axios from "axios";

export default class BaseApi {
  _axios;
  urlPrefix;

  constructor(urlPrefix) {
    this._axios = axios;
    this.urlPrefix = urlPrefix;
  }

  getUrlPrefix(url) {
    return `${this.urlPrefix}${url}`;
  }

  async get(url, params = {}) {
    try {
      console.log("diem cuoi", this.getUrlPrefix(url))
      const result = await this._axios.get(this.getUrlPrefix(url), {
        params,
      });
      console.log(result.response());
      return result.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async post(url, body = {}) {
    try {
      const result = await this._axios.post(this.getUrlPrefix(url), body);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async patch(url, body = {}) {
    try {
      const result = await this._axios.patch(this.getUrlPrefix(url), body);
      return result.data;
    } catch (error) {
      throw error;
    }
  }

  async remove(url) {
    try {
      const result = await this._axios.delete(this.getUrlPrefix(url));
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}