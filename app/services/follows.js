import api from './api';

export default {
  followsomeone: (follower_id, leader_id) => api.post('/api/follows/' + leader_id + '/create', {follower_id, leader_id}),
  showFolllower: id => api.get('/api/follows?leader_id=' + id),
  showFollowing: id => api.get('/api/follows?follower_id=' + id),
};
