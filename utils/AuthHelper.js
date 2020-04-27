import Router from 'next/router';
import Cookie from "./Cookie";

class AuthHelper {
    tokenKey = "token"
    pathPageHome = "/"
    pathPageLogin = "/login"
    cookieService = null;

    constructor() {
        this.cookieService = new Cookie();
    }

    setAuthLocalStorage(user) {
        const optionsCookie = {
            maxAge: 36000000,
        }
        this.cookieService.setCookie(this.tokenKey, user.token, optionsCookie);
    }

    isAuthenticated() {
        return this.cookieService.getCookie(this.tokenKey);
    }

    checkRedirectHomeCSR() {
        if (this.isAuthenticated) {
            Router.push(this.pathPageHome);
            return {};
        }
        return {}
    }

    checkRedirectLoginCSR() {
        if (!this.isAuthenticated) {
            Router.push(this.pathPageLogin);
            return {};
        }
        return {}
    }

    checkRedirectHomeSSR(ctx) {
        const { req, res } = ctx;
        if (req.headers.cookie) {
            const cookies = this.cookieService.convertCookieStringToObject(req.headers.cookie);
            const token = cookies.token;
            if (token) {
                res.writeHead(301, { Location: this.pathPageHome, 'Cache-Control': 'no-cache' })
                res.end()
                return {}
            }
        }
        return {};
    }

    checkRedirectLoginSSR(ctx) {
        const { req, res } = ctx;
        if (req.headers.cookie) {
            const cookies = this.cookieService.convertCookieStringToObject(req.headers.cookie);
            const token = cookies.token;
            if (!token) {
                res.writeHead(301, { Location: this.pathPageLogin, 'Cache-Control': 'no-cache' })
                res.end()
                return {}
            }
        } else {
            res.writeHead(301, { Location: this.pathPageLogin, 'Cache-Control': 'no-cache' })
            res.end()
            return {}
        }
    }
}

export default AuthHelper;