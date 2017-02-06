import api from './api';

export default {
  getTimeline: () => api.get('/posts'),
};
