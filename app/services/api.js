import axios from 'axios';
import querystring from 'qs';
import MockAdapter from 'axios-mock-adapter';
import userFactory from '../factories/user';
import timelineFactory from '../factories/timeline';
import notifFactory from '../factories/notif';

class Api {
  constructor(baseUrl, middleware = () => {}) {
    this.baseUrl = baseUrl;
    this.client = axios.create();
    middleware(this.client);
    this.client.interceptors.request.use(config => {
      console.log(config);
      return config;
    });
  }
  put(url, json, qs = {}, config) {
    return this.sendRequest('PUT', url, { qs, json, config });
  }
  get(url, qs, config = {}) {
    return this.sendRequest('GET', url, { qs, config });
  }
  post(url, form, qs = {}, config = {}) {
    return this.sendRequest('POST', url, { qs, form, config });
  }
  delete(url, qs = {}, config = {}) {
    return this.sendRequest('DELETE', url, { qs, config });
  }
  sendRequest(requestMethod, url, data = {}) {
    const request = this.client.request({
      method: requestMethod,
      url,
      baseURL: this.baseUrl,
      params: data.qs,
      data: data.json || querystring.stringify(data.form) || data.formData,
      headers: data.headers,
      timeout: 60 * 1000,
      paramsSerializer: params => querystring.stringify(params),
    }, data.config);
    return request
    .then(json => Promise.resolve(json.data))
    .catch(error => Promise.reject(error));
  }
}

const api = new Api('https://jsonplaceholder.typicode.com', (instance) => {
  const mockery = new MockAdapter(instance, { delayResponse: 2000 });
  mockery.onGet('/me').reply(200, userFactory());
  mockery.onGet('/timeline').reply(200, {
    data: timelineFactory(),
  });
  mockery.onGet('/notification').reply(200, notifFactory());
});
export default api;
