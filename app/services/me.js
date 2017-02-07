import axios from 'axios';
import api from './api';

class Me {
  getMe(token) {
    return api.get('/me', { headers: { Autorization: token } });
  }
  updateMe(json) {
    api.put('/me', { json })
  }
}

const me = new Me();
export default me;
