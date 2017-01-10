import EventEmitter from 'events';

export default class extends EventEmitter {
  constructor(authenticationService) {
    super();
    this.request = authenticationService.authenticatedClient();
    this.request.interceptors.response.use(response => response, (err) => {
      this.emit('error', err);
      return Promise.reject(err);
    });
  }

  async get(resourceType) {
    const res = await this.request.get(resourceType);
    return res.data;
  }

  async create(resourceType, item) {
    const res = await this.request.post(resourceType, item);
    return res.data;
  }

  async update(resourceType, items) {
    const reqs = [];
    items.forEach((item) => {
      reqs.push(this.request.put(`${resourceType}/${item.id}`, item));
    });
    await Promise.all(reqs);
  }

  async del(resourceType, items) {
    const reqs = [];
    items.forEach((item) => {
      reqs.push(this.request.delete(`${resourceType}/${item.id}`));
    });
    await Promise.all(reqs);
  }
}
