import api from './api';

export default {
  getChat: () => api.get('/chat'),
};
