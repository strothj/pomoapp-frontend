export default class {
  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }

  async get(resourceType) {
    const request = this.authenticationService.authenticatedClient();
    const res = await request.get(resourceType);
    return res.data;
  }

  async create(resourceType, item) {
    const request = this.authenticationService.authenticatedClient();
    const res = await request.post(resourceType, item);
    return res.data;
  }

  async update(resourceType, items) {
    const request = this.authenticationService.authenticatedClient();
    const reqs = [];
    items.forEach((item) => {
      reqs.push(request.put(`${resourceType}/${item.id}`, item));
    });
    await Promise.all(reqs);
  }

  async del(resourceType, items) {
    const request = this.authenticationService.authenticatedClient();
    const reqs = [];
    items.forEach((item) => {
      reqs.push(request.delete(`${resourceType}/${item.id}`));
    });
    await Promise.all(reqs);
  }
}
