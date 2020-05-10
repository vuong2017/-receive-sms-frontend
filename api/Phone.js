import BaseApi from "./BaseApi";

class Phone extends BaseApi {

  constructor() {
    const module = '/phone';
    super(module);
  }

  getMessageByPhone = async (id, params) => {
    return this.axios.get(this.getUrlApi(`/${id}/message`), params);
  }

}

export default Phone;