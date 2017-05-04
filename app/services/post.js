import api from './api';

const post = {
  getPost: () => api.get('/api/me/feed'),
  updatePost: (id, data) => api.put(),
  deletePost: (id) => api.delete(),
  newPost: (data) => api.post(),
  likePost: (id) => api.put(),
  unlikePost: (id) => api.put()
}

export default post
