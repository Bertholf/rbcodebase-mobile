import api from './api';

export default {
  getComment: () => api.get('/comment'),
  postComment: (text, post_id) => api.post('/api/timeline/comment', { text, post_id, type: 'form-url-encoded' }),
};
