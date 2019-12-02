export class Http {
  constructor() {
  }

  async get(url) {
    const response = await fetch(url);
    return response.json();
  }
}
