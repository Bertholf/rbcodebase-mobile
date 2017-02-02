import api from './api';

export default {
  getProfile: () => api.get('/me'),
  setProfile: json => api.put('/me', json),
};
