import api from './api';

export default {
  login: (username, password) => api.post('/login', {
    data: { username, password },
  }),
  register: (name, email, username, password) => api.post('/register', {
    data: { name, email, username, password },
  }),
};
