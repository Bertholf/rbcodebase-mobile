import api from './api';

export default {
  getProfile: () => api.get('/profile'),
};
