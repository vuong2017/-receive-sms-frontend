import Example from "./Example";

const requestMap = {
  Example
}

export const getApiModule = (module) => {
  if(!requestMap[module]) {
    throw new Error('không tìm thấy module api');
  }
  return new requestMap[module];
}