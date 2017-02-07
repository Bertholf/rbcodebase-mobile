import api from './api';

export default{
  getNotifications: () => api.get('/notifications'),
};
