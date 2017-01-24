import api from './api';

export default {
  getAllPosts: () => api.get('/posts'),
};
