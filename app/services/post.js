import api from './api';

const post = {
  getPost: () => api.get('/api/me/feed'),
  updatePost: (id, data) => api.put(),
  deletePost: (id) => api.delete(),
  newPost: (text, type) => api.post('api/timeline/post', {text, type}),
  likePost: (type ,post_id) => api.post('api/timeline/like', {type, post_id}),
  unlikePost: (id) => api.put()
}

export default post;
