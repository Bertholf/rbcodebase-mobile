import api from './api';
import config from './../config';

export default {
  login: (username, password) => api.post('/oauth/token',
    { username, password, client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE },
  ),
  check: (access_token, provider, oauth_provider_id) => api.post('/api/after-oauth',
    { access_token, provider, oauth_provider_id }
  ),
  register: (name_first, name_last, name_slug, email, password, password_confirmation) => api.post('/api/users/register',
     { name_first, name_last, name_slug, email, password, password_confirmation, client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE }
  ),
  checktwitter: (access_token, provider, secret) => api.post('/api/after-oauth',
      { access_token, provider, secret }
  ),
  profile: ()=> api.get('/api/me',
      { client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE }
  ),
  adprefe: ()=> api.get('/api/me/settings',
      { client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE }
  ),
  updateProfile: (id, name_first, name_last, name_slug, phone, birthday, password, password_confirmation) =>
  api.put('/api/users/' + id, {
    name_first,
    name_last,
    name_slug,
    phone,
    birthday,
    password,
    password_confirmation,
    client_id: config.CLIENT_ID,
    client_secret: config.client_secret,
    grant_type: config.GRANT_TYPE,
  },
  ),
  updateSetting: (privacy_follow, privacy_follow_confirm, privacy_comment, privacy_post, privacy_timeline_post, privacy_message, email_follow, email_post_like, email_post_share, email_comment_post, email_comment_like, email_comment_reply) =>
  api.patch('/api/me/settings/', {
    privacy_follow,
    privacy_follow_confirm,
    privacy_comment,
    privacy_post,
    privacy_timeline_post,
    privacy_message,
    email_follow,
    email_post_like,
    email_post_share,
    email_comment_post,
    email_comment_like,
    email_comment_reply,
    client_id: config.CLIENT_ID,
    client_secret: config.client_secret,
    grant_type: config.GRANT_TYPE,
  },
),
  followers: ()=> api.get('api/follows?leader_id='+id,
  {client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE, follower}
),
};
// app /services
