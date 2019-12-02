export interface IHttpClient {
	get: (url: string) => Promise<any>;
}

export class Http implements IHttpClient {
  async get(url: string): Promise<any> {
    const response = await fetch(url);
    return response.json();
  }
}
