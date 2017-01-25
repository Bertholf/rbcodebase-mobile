import request from 'superagent';

class Api {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  put(url, form, qs = {}) {
    return this.sendRequest('PUT', url, { qs, form });
  }
  get(url, qs) {
    return this.sendRequest('GET', url, { qs });
  }
  post(url, form, qs = {}) {
    return this.sendRequest('POST', url, { qs, form });
  }
  sendRequest(url, requestMethod, data = {}) {
    let req = request[requestMethod](url);
    if (Object.prototype.hasOwnProperty.call(data, 'qs')) {
      req = req.query(data.qs);
    }
    if ({}.hasOwnProperty.call(data, 'form') || {}.hasOwnProperty.call(data, 'json') || {}.hasOwnProperty.call(data, 'multipart')) {
      const currentData = data.form || data.json || data.multipart;
      req = req.send(currentData);
    }
    return new Promise((resolve, reject) => {
      req.end((err, res) => {
        if (err || !res.ok) {
          reject(err);
        } else {
          resolve(res.body);
        }
      });
    });
  }
}

const api = new Api('https://jsonplaceholder.typicode.com');
export default api;
