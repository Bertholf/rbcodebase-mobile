const axios = require('axios');

const BASE_URL = 'https://jsonplaceholder.typicode.com';

const instance = axios.create({
  baseURL: BASE_URL,
  header: {
  'X-Custom-Header' : 'foobar'
  },
});
// comment.getComments().then(response=>{
//
// });
//
// getComments = (postId)=>{
//   api.get('/post/${postId}/comments')
// }
instance.get('/albums')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  instance.post('/users', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // export function FetchWeather(city) {
  //     let url = `${API_URL}&q=${city},in`;
  //     return function (dispatch) {
  //       axios.get(url)
  //         .then((response) => dispatch({
  //           type: types.FETCH_WEATHER_SUCCESS,
  //           data: response.data
  //         }).error((response) => dispatch({
  //           type: types.FETCH_WEATHER_FAILURE,
  //           error: response.error
  //         })
  //     }
  //   }
