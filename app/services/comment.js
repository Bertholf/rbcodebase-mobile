import api from './api';

export default {
  getComment: () => api.get('/comment'),
};
