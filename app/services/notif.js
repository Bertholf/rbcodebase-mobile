import api from './api';

export default{
  getNotifications: () => api.get('/notifications'),
  sendToken: token => api.post('/api/notifications-token', { token }),
};
