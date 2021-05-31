const httpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
};

class Service {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async request(path = '', method = httpMethods.GET, data = {}) {
    const url = [this.baseUrl, path].join('/');
    const options = {
      method,
      headers: {
        contentType: 'application/json',
      },
    };

    if (method === httpMethods.POST || method === httpMethods.PUT) {
      options.body = JSON.stringify(data);
    }

    return fetch(url, options);
  }

  async list() {
    return this.request().then((res) => res.json());
  }

  async entity(id) {
    return this.request(id).then((res) => res.json());
  }

  async create(data) {
    return this.request('', httpMethods.POST, data).then((res) => res.json());
  }

  async update(id, data) {
    return this.request(id, httpMethods.PUT, data).then((res) => res.json());
  }
}

export default Service;
