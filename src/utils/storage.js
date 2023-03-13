// eslint-disable-next-line import/no-anonymous-default-export
export default {
    session: {
      set(key, value) {
        sessionStorage.setItem(key, JSON.stringify(value));
      },
      get(key) {
        return JSON.parse(sessionStorage.getItem(key));
      },
      delete(key) {
        sessionStorage.removeItem(key);
      },
      check(key) {
        return sessionStorage.getItem(key) !== null && sessionStorage.getItem(key) !== undefined;
      },
      clear() {
        sessionStorage.clear();
      },
    },
  
    local: {
      set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
      },
      get(key) {
        return JSON.parse(localStorage.getItem(key));
      },
      delete(key) {
        localStorage.removeItem(key);
      },
      check(key) {
        return localStorage.getItem(key) !== null && localStorage.getItem(key) !== undefined;
      },
      clear() {
        localStorage.clear();
      },
    },
  };
  