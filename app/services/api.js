import axios from 'axios';
import querystring from 'qs';
import { AsyncStorage } from 'react-native';

class Api {
  constructor(baseUrl, middleware = () => {}) {
    this.baseUrl = baseUrl;
    this.client = axios.create();
    middleware(this.client);
    this.client.interceptors.request.use(config =>
       config);

    this.client.interceptors.response.use((response) => {
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
      //  cancelToken: this.getCancelCaller().token,
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

const api = new Api('http://rbcodebase.com/', () => {});
export default api;
