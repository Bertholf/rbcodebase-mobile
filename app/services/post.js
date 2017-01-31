import api from './api';

const post = {
  getPosts: () => api.get('/posts'),
  updatePost: (id, data) => api.put('/posts/'+id, data),
  deletePost: (id) => api.delete('/posts'),
  newPost: (data) => api.post('/posts', data),
  likePost: (id) => api.put('/posts/'+id+'/like'),
  unlikePost: (id) => api.put('/posts/'+id+'/unlike')
}

export default post
