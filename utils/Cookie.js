import { Cookies } from 'react-cookie';

class Cookie {

    cookie = null;

    constructor() {
        this.cookie = new Cookies();
    }

    getCookie(key) {
        return this.cookie.get(key)
    }

    setCookie(key, value, options = {}) {
        this.cookie.set(key, value, options)
    }
}

export default Cookie;