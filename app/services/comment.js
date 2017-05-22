import api from './api';

export default {
  getComment: () => api.get('/comment'),
  postComment: (text, post_id) => api.post('/api/timeline/comment', { text, post_id, type: 'form-url-encoded' }),
  deleteComment: id => api.post(`api/timeline/comment/${id}/delete`),
  getId: () => api.get('api/me/feed'),
  getAllPost: () => api.get('api/me/post-feed')
};
