class LocalStorage {
    constructor() {
        this.storage = window.localStorage;
    }

    getItem(key) {
        this.storage.getItem(key);
    }

    setItem(key, value) {
        this.storage.setItem(key, value);
    }

    clearAll() {
        this.storage.clear()
    }
}

export default LocalStorage;