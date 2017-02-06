import api from './api';

export default {
  getMe: () => api.get('/me'),
  updateMe: json => api.put('/me', { json }),
};
