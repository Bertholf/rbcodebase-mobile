import api from './api';

const AuthService = {
  updateUsername: (username) => api.get('/Login', username),
  updatePassword: (password) => api.get('/login', password),
  submitLogin: () => api.get('/login'),
  loginWithGoogle: () => api.get('/loginGoogle'),
  loginWithFacebook: () => api.get('loginFacebook'),
  logOut: () => api.get('/logOut'),
  register: () => api.get('registr'),
};

export default AuthService;
