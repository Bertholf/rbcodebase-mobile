import api from './api';

export default {
  getTimeline: () => api.get('api/me/post-feed'),
  postTimeline: () => api.post('/posts'),
  getTimelineId: (id) => api.get(`api/me/feed?user_id=${id}`)
};
