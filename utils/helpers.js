import { notification } from 'antd';
import { LIST_TYPE_NOTIFICATION } from "./config";

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function cloneDeep(data = {}) {
  return JSON.parse(JSON.stringify(data));
}

export function objectKeyToArray(object){
  return Object.keys(object)
}

export function openNotification(type = "open", message = "", description = "", onClick){
  if (!objectKeyToArray(LIST_TYPE_NOTIFICATION).includes(type)) {
    throw new Error("type not empty");
  }
  notification[type]({
    message,
    description,
    onClick,
  });
};

export function getMessageErrorServer(errors){
  let text = "";
  objectKeyToArray(errors).forEach(key => {
    text += errors[key].join(", ");
  })
  return text;
}

export function handleErrorServer(err) {
  if (err.response) {
    if ([200, 201].includes(err.response.status)) {
      return openNotification(LIST_TYPE_NOTIFICATION.success, err.response.data.message)
    }
    if ([422].includes(err.response.status)) {
      return openNotification(LIST_TYPE_NOTIFICATION.error, err.response.data.message, getMessageErrorServer(err.response.data.errors))
    }
  }
  return openNotification(LIST_TYPE_NOTIFICATION.error, "An unknown error")
}