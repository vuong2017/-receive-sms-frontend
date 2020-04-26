import LocalStorage from "./LocalStorage";

class AuthHelper extends LocalStorage {
    constructor() {
        super();
    }

    setAuthLocalStorage(user) {
        this.setItem("token", user.token);
    }
}

export default AuthHelper;