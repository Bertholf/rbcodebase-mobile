import api from './api';
import config from '../config';

export default {
  getFriend: () => api.get('/api/users?following=false', {
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    grant_type: config.GRANT_TYPE,
  }),
  putFriend: () => api.put('/friendlist'),
};
