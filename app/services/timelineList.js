import api from './api';

export default {
  getTimeline: () => api.get('api/me/feed'),
  postTimeline: () => api.post('/posts'),

};
