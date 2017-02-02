import api from './api';

export default {
  getProfile: () => api.get('/profile'),
  setProfile: json => api.put('/profile', json),
};
