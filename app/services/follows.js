import api from './api';

export default {
  followsomeone: (follower_id, leader_id) => api.post('/api/follows', { follower_id, leader_id, status: 'request' }),
  showFollower: id => api.get(`/api/follows?leader_id=${id}&status=approved`),
  showFollowing: id => api.get(`/api/follows?follower_id=${id}`),
  showFollowing2: (idF, idL) => api.get(`/api/follows?follower_id=${idF}&leader_id=${idL}`),
  updatefollow: (follower_id, leader_id, status) => api.post('/api/follows',
    { follower_id, leader_id, status },
  ),
  unfollow: id => api.delete(`/api/follows/${id}`),
  search: name => api.get(`api/users?search=${name}&searchFields=name_first:like;name_last:like;email:like`),
  searchFollower: (name, leader_id) => api.get(`api/follows?leader_id=${leader_id}&search=${name}&orderBy=users:follower_id|name_first&searchFields=follower.name_first:like;follower.name_last:like;follower.email:like`),
  searchFollowing: (name, follower_id) => api.get(`api/follows?follower_id=${follower_id}&search=${name}&orderBy=users:leader_id|name_first&searchFields=leader.name_first:like;leader.name_last:like;leader.email:like`),
  checkFollowing: (follower_id, leader_id) => api.get(`/api/follows?leader_id=${leader_id}&follower_id=${follower_id}`),
  showApproval: id => api.get(`/api/follows?leader_id=${id}&status=request`),
  reqApproval: (follower_id, leader_id, status, id) => api.patch(`/api/follows/${id}`, { follower_id, leader_id, status }),
};
