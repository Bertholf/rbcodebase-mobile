import api from './api';

const ServiceSetting = {
  getSetting: () => api.get('/me/setting'),
  updateSetting: (data) => api.put('/me/setting',data),
};

export default ServiceSetting;
