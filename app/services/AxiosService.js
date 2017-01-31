const axios = require('axios');

const BASE_URL = 'http://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL: BASE_URL,
  header: {
    'X-Custom-Header' : 'foobar'
  },
});

instance.get('/users')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
