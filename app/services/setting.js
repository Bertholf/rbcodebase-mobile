import api from './api';

export default {
  getSetting: () => api.get('/setting'),
  updateSetting: json => api.put('/setting', { json }),
};
