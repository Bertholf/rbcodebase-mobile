import api from './api';

export default {
  getFriend: () => api.get('/friendlist'),
  putFriend: () => api.put('/friendlist'),
};
