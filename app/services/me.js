import api from './api';

export default {
  getMe: () => api.get('/timeline'),
};
