import api from './api';
import config from './../config';

export default {
  login: (username, password) => api.post('/oauth/token',
    { username, password, client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE },
  ),
  register: (name_first, name_last, name_slug, email, password, password_confirmation) => api.post('/api/users/register',
     { name_first, name_last, name_slug, email, password, password_confirmation, client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE }
  ),
  profile: () => api.post('/api/me',
     { client_id: config.CLIENT_ID, client_secret: config.CLIENT_SECRET, grant_type: config.GRANT_TYPE }
  ),
};
//app/services
