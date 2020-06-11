import BaseApi from "../BaseApi";

class Textnow extends BaseApi {

  constructor() {
    const module = '/phone';
    super(module);
  }

}

export default Textnow;