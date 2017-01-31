import axios from 'axios';
import querystring from 'qs';

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    this.client = axios.create();
    this.client.interceptors.response.use(response => response);
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
  sendRequest(url, requestMethod, data = {}) {
    const request = this.client.request({
      method: requestMethod,
      url,
      baseURL: this.baseURL,
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

const api = new Api('https://jsonplaceholder.typicode.com');
export default api;
