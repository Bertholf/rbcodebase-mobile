import api from './api';

export default {
  login: (username, password) => api.post('/login', {
    data: { username, password },
  }),
  register: (name, email, phone, password) => api.post('/register', {
    data: { name, email, phone, password },
  }),
};
