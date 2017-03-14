import axios from 'axios';
import querystring from 'qs';
import MockAdapter from 'axios-mock-adapter';
import userFactory from '../factories/user';
import timelineFactory from '../factories/timeline';
import loginFactory from '../factories/AuthLogin';
import settingfactory from '../factories/setting';
import notifFactory from '../factories/notif';
import commentFactory from '../factories/listcomment';
import registerFactory from '../factories/AuthRegister';
import friendlistFactory from '../factories/friendlist';
import listTimeline from '../factories/listTimeline';
import chatFactory from '../factories/listChat';
import { AsyncStorage } from 'react-native';

class Api {
  constructor(baseUrl, middleware = () => {}) {
    this.baseUrl = baseUrl;
    this.client = axios.create();
    middleware(this.client);
    this.client.interceptors.request.use(config =>
      // console.log(config);
       config);

    this.client.interceptors.response.use((response) => {
      console.log(response);
      return response;
    });
  }
  put(url, json, qs = {}, config) {
    return this.sendRequest('PUT', url, { qs, json, config });
  }
  get(url, config = {}, qs) {
    return this.sendRequest('GET', url, { qs, config });
  }
  post(url, form, qs = {}, config = {}) {
    return this.sendRequest('POST', url, { qs, form, config });
  }
  patch(url, form, qs = {}, config = {}) {
    return this.sendRequest('PATCH', url, { qs, form, config });
  }
  delete(url, qs = {}, config = {}) {
    return this.sendRequest('DELETE', url, { qs, config });
  }
  sendRequest(requestMethod, url, data = {}) {
    return AsyncStorage.getItem('accessToken')
   .then((token) => {
     console.log('requesting');
     const headers = data.config ? (data.config.headers || {}) : {};
     if (token && url !== '/oauth/token' && url !== '/api/users/register') {
       headers.Authorization = `Bearer ${token}`;
     }
    //  headers.Authorization = token !== null ? `Bearer ${token}`: null;
     this.client.defaults.headers.common = headers;
     const request = this.client.request({
       method: requestMethod,
       url,
       baseURL: this.baseUrl,
       params: data.qs,
       data: data.json || querystring.stringify(data.form) || data.formData,
       headers: Object.assign(headers, data.json ? { 'Content-type': 'application/json' } : (data.form ? { 'Content-Type': 'application/x-www-form-urlencoded' } : { 'Content-Type': 'multipart/form' })),
       timeout: 60 * 1000,
       paramsSerializer: params => querystring.stringify(params),
     }, data.config);
     return request;
   })
   .then(json => Promise.resolve(json.data))
   .catch((error) => {
     console.log(error);
     return Promise.reject(error);
   });
  }
}

const api = new Api('http://rbcodebase.com/', (instance) => {
  // const mockery = new MockAdapter(instance, { delayResponse: 2000 });
  // mockery.onGet('/me').reply(200, userFactory());
  // mockery.onPut('/me').reply(200);
  // mockery.onGet('/timeline').reply(200, listTimeline());
  // mockery.onGet('/timeline').reply(200, {
  // });
  //   data: timelineFactory(),
  // mockery.onGet('/notifications').reply(200, {
  //   data: notifFactory(),
  // });
  // mockery.onGet('/posts').reply(200, listTimeline());
  // mockery.onPost('/posts').reply(200);
  // mockery.onGet('/setting').reply(200, settingfactory());
  // mockery.onPut('/setting').reply(200);
  // mockery.onPost('/login').reply(200, {
  //   data: loginFactory(),
  // });
  // mockery.onGet('/friendlist').reply(200, {
  //   data: friendlistFactory(),
  // });
  // mockery.onGet('/setting').reply(200, settingfactory());
  // mockery.onPut('/setting').reply(200);
  // mockery.onGet('/comment').reply(200, commentFactory());
  // mockery.onPost('/register').reply(200, registerFactory());
  // mockery.onGet('/chat').reply(200, chatFactory());
  // mockery.onPost('/chat').reply(200, chatFactory());

});
export default api;
