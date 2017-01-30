import api from './api';

const comment = {
  getComments: (postId) => api.get('/post/'+postId+'/comments'),
  newComment: (postId, data) => api.post('/post/'+postId+'/comments', data),
  updateComment: (postId, commentId, data) => api.put('/post/'+postId+'/comments/'+commentId, data),
  deleteComment: (postId, commentId) => api.delete('/post/'+postId+'/comments/'+commentId),
  likeComment: (postId, commentId) => api.put('/post/'+postId+'/comments/'+commentId+'/like'),
  unlikeComment: (postId, commentId) => api.put('/post/'+postId+'/comments/'+commentId+'/unlike'),
};

export default comment;
