import api from './api';

const post = {
  getPost: () => api.get('/api/me/feed'),
  updatePost: (id, data) => api.put(),
  deletePost: (id) => api.delete(),
  newPost: (text, type) => api.post('api/timeline/post', {text, type}),
  likePost: (id) => api.put(),
  unlikePost: (id) => api.put()
}

export default post
