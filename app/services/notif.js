import api from './api';

export default {
  getNotifications: () => api.get('/notifications'),
  sendToken: (token, device_id )=> api.post('/api/notification-token', {
    token, device_id,
  }),
};
