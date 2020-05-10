import Example from "./Example";
import Auth from "./Auth";
import Phone from "./Phone";

const requestMap = {
  Example,
  Auth,
  Phone
}

export const getApiModule = (module) => {
  if(!requestMap[module]) {
    throw new Error('không tìm thấy module api');
  }
  return new requestMap[module]();
}