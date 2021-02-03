export const environment = {
  production: false,
  URL_API_BASE: 'https://localhost:8100/api',
  URL_IMG_BASE: 'https://localhost:8100',
  async getToken() {
    return (
      JSON.parse(localStorage.getItem(this.storageKeys.token_type)) +
      ' ' +
      JSON.parse(localStorage.getItem(this.storageKeys.access_token) || '')
    );
  },

  getUser() {
    return JSON.parse(localStorage.getItem(this.storageKeys.user));
  },

  get storageKeys() {
    return {
      user: 'user',
      token_type: 'token_type',
      access_token: 'access_token',
    };
  },

  get DefaultMessages() {
    return {
      error: 'Ocurrió un error inesperado. Pongase en contacto con nosotros.',
    };
  },
};
