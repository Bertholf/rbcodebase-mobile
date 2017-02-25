import api from './api';

export default {
  followsomeone: (follower_id, leader_id) => api.post('/api/follows/' + leader_id + '/create', {follower_id, leader_id}),
  showFollower: id => api.get('/api/follows?leader_id=' + id),
  showFollowing: id => api.get('/api/follows?follower_id=' + id),
};
