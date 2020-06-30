import Example from "./Example";
import Auth from "./Auth";
import Phone from "./Phone";

//admin
import Textnow from "./admin/TextNow";

const requestMap = {
  Example,
  Auth,
  Phone,
  //admin
  Textnow,
}

export const getApiModule = (module) => {
  if(!requestMap[module]) {
    throw new Error('không tìm thấy module api');
  }
  return new requestMap[module]();
}