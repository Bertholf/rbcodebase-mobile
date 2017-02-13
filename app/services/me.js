import axios from 'axios';
import api from './api';

class Me {
  getMe() {
    return api.get('/auth/token');
  }
  updateMe(json) {
    api.put('/me', { json })
  }
}

const me = new Me();
export default me;
