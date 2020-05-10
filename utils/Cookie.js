import { Cookies } from 'react-cookie';

let cookies = {};
export const setCookies = (data) => {
    cookies = data;
}

class Cookie {

    cookie = null;

    constructor() {
        this.cookie = new Cookies();
    }

    getCookie(key) {
        return this.cookie.get(key) || cookies[key]
    }

    setCookie(key, value, options = {}) {
        this.cookie.set(key, value, options)
    }

    convertCookieStringToObject(cookies) {
        const arr = cookies.split(";");
        const cookieObject = {};
        arr.forEach(cookie => {
            const convertArr = cookie.split("=")
            cookieObject[convertArr[0].trim()] = convertArr[1]
        })
        return cookieObject;
    }
}

export default Cookie;