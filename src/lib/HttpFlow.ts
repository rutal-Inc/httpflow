import { RequestInitWithoutMethod } from "../@types";

export default class HttpFlow {
  private async request<T = unknown>(
    endpoint: string,
    options: RequestInit
  ): Promise<T> {
    return fetch(endpoint, options)
      .then(async (response) => {
        return (await response.json()) as T;
      })
      .catch((error) => {
        return error;
      });
  }

  get<T = unknown>(
    endpoint: string,
    options?: RequestInitWithoutMethod
  ): Promise<T> {
    const reqOptions: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    };

    return this.request<T>(endpoint, reqOptions);
  }

  delete<T = unknown>(
    endpoint: string,
    options?: RequestInitWithoutMethod
  ): Promise<T> {
    const reqOptions: RequestInit = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      ...options,
    };

    return this.request<T>(endpoint, reqOptions);
  }
}
