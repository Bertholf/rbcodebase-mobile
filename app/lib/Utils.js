import axios from 'axios';

module.exports = {
  axios: function() {
    return axios.create({
      baseURL: 'http://api.bixboxapptest.com'
    });
  },
}
