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
    }

    checkRedirectLoginCSR() {
        if (!this.isAuthenticated) {
            Router.push(this.pathPageLogin);
            return {};
        }
    }

    checkRedirectHomeSSR(ctx) {
        const { req, res } = ctx;
        let token = "";
        if (req.headers.cookie) {
            req.headers.cookie.split(";").forEach(cookie => {
                const arr = cookie.split("=");
                if (arr[0] === "token") {
                    token = arr[1];
                }
            })
            if (token) {
                res.writeHead(301, { Location: '/', 'Cache-Control': 'no-cache' })
                res.end()
                return {}
            }
        }
        return {};
    }

    checkRedirectLoginSSR(ctx) {
        const { req, res } = ctx;
        let token = "";
        if (req.headers.cookie) {
            req.headers.cookie.split(";").forEach(cookie => {
                const arr = cookie.split("=");
                if (arr[0] === "token") {
                    token = arr[1];
                }
            })
            if (!token) {
                res.writeHead(301, { Location: '/login', 'Cache-Control': 'no-cache' })
                res.end()
                return {}
            }
        } else {
            res.writeHead(301, { Location: '/login', 'Cache-Control': 'no-cache' })
            res.end()
            return {}
        }
    }
}

export default AuthHelper;