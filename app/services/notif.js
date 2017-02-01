import api from './api';

export default{
  getNotif: () => api.get('/notification'),
};
