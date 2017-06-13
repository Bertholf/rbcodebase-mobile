import api from './api';

const post = {
  getPost: () => api.get('/api/me/feed'),
  updatePost: (id, text) => api.post(`api/timeline/post/${id}/update`, {text}),
  deletePost: (id) => api.post(`/api/timeline/post/${id}/delete`),
  newPost: (text, type) => api.post('api/timeline/post', {text, type}),
  likePost: (post_id) => api.post('api/timeline/like', {post_id}),
  unlikePost: (id) => api.post(`api/timeline/like/${id}/unlike`),
}

export default post;
