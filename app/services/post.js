import api from './api';

const post = {
  getPosts: () => api.get(),
  updatePost: (id, data) => api.put(),
  deletePost: (id) => api.delete(),
  newPost: (data) => api.post(),
  likePost: (id) => api.put(),
  unlikePost: (id) => api.put()
}

export default post
