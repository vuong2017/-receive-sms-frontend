import BaseApi from "./BaseApi";

class Phone extends BaseApi {

  constructor() {
    const module = '/phone';
    super(module);
  }

  getMessageByPhone = async (data) => {
    
    const { idParams } = data;
    return this.axios.get(this.getUrlApi(`/${idParams.id}/message`));
  }

}

export default Phone;