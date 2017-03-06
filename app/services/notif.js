import api from './api';

export default{
  getNotifications: () => api.get('/notifications'),
  sendToken: token => api.post('/api/notification-token', {
    token,
  }),
};
