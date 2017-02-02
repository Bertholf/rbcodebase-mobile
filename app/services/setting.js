import api from './api';

export default {
  getSetting: () => api.get('/setting'),
  setSetting: json => api.put('/setting', json),
};
