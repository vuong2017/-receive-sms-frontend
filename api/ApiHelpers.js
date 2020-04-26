import Example from "./Example";
import Auth from "./Auth";

const requestMap = {
  Example,
  Auth
}

export const getApiModule = (module) => {
  if(!requestMap[module]) {
    throw new Error('không tìm thấy module api');
  }
  return new requestMap[module]();
}