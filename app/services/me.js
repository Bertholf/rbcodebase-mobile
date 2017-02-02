import api from './api';

export default {
  getMe: () => api.get('/me'),
  setMe: json => api.put('/me', json),
};
