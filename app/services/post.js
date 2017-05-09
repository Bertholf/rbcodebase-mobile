import api from './api';

const post = {
  getPost: (text, type) => api.get('/api/timeline/feed', { text, type }),
  updatePost: (id, data) => api.put(),
  deletePost: (id) => api.delete(),
  newPost: (text, type) => api.post('api/timeline/post', {text, type}),
  likePost: (type ,id) => api.post('api/timeline/like', {type, id}),
  unlikePost: (id) => api.put()
}

export default post;
