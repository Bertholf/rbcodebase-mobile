import axios from 'axios';

module.exports = {
  axios() {
    return axios.create({
      baseURL: 'http://api.bixboxapptest.com',
    });
  },
  country: 'Indonesia',
  country_code: '62',
  locale: 'id',
  timezone: 'Asia/Jakarta',
  display_name: 'display_name',
  phone: 'phone',
};
