const AUTHENTICATION_TOKEN = "sb-uarllyemsintcyzlztee-auth-token";

export const storage = {
  getStorage() {
    return JSON.parse(localStorage.getItem(AUTHENTICATION_TOKEN));
  },
};
