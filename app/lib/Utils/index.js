import axios from 'axios';

module.exports = {
  axios() {
    return axios.create({
      baseURL: 'http://api.bixboxapptest.com',
    });
  },
};
