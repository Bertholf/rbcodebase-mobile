import api from './api';

export default {
  getFriend: () => api.get('/api/users'),
  putFriend: () => api.put('/friendlist'),
};
