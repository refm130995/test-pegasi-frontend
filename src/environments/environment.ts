export const environment = {
  production: false,
  URL_API_BASE: 'http://localhost:8100/api/v1',
  URL_IMG_BASE: 'http://localhost:8100',
  async getToken() {
    return localStorage.getItem('token');
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
