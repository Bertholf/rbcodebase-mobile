import api from './api';

export default {
  getTimeline: () => api.get('/timeline'),
};
