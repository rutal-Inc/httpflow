import { RequestOptions } from "../@types";

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

  get<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
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

  post<T = unknown>(endpoint: string, options: RequestOptions): Promise<T> {
    const reqOptions: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(options.body),
    };

    return this.request<T>(endpoint, reqOptions);
  }

  patch<T = unknown>(endpoint: string, options: RequestOptions): Promise<T> {
    const reqOptions: RequestInit = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(options.body),
    };

    return this.request<T>(endpoint, reqOptions);
  }
}
