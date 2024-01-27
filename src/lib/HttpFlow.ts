import { RequestOptions } from "../@types";

/**
 * @class HttpFlow
 * @description A sleek and lightweight wrapper for the Fetch API with TypeScript generics support.
 * @exports HttpFlow
 */
export default class HttpFlow {
  /**
   * @method request
   * @description Makes a generic HTTP request using the Fetch API.
   * @param {string} endpoint - The URL to send the request to.
   * @param {RequestInit} options - Additional options for the request (e.g., method, headers, body).
   * @returns {Promise<T>} - A promise that resolves to the parsed JSON response.
   */
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

  /**
   * @method get
   * @description Sends a GET request to the specified endpoint.
   * @param {string} endpoint - The URL to send the GET request to.
   * @param {RequestOptions} [options] - Additional options for the request.
   * @returns {Promise<T>} - A promise that resolves to the parsed JSON response.
   */
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

  /**
   * @method post
   * @description Sends a POST request to the specified endpoint.
   * @param {string} endpoint - The URL to send the POST request to.
   * @param {RequestOptions} options - Additional options for the request, including the request body.
   * @returns {Promise<T>} - A promise that resolves to the parsed JSON response.
   */
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

  /**
   * @method put
   * @description Sends a PUT request to the specified endpoint.
   * @param {string} endpoint - The URL to send the PUT request to.
   * @param {RequestOptions} options - Additional options for the request, including the request body.
   * @returns {Promise<T>} - A promise that resolves to the parsed JSON response.
   */
  put<T = unknown>(endpoint: string, options: RequestOptions): Promise<T> {
    const reqOptions: RequestInit = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
      body: JSON.stringify(options.body),
    };

    return this.request<T>(endpoint, reqOptions);
  }

  /**
   * @method patch
   * @description Sends a PATCH request to the specified endpoint.
   * @param {string} endpoint - The URL to send the PATCH request to.
   * @param {RequestOptions} options - Additional options for the request, including the request body.
   * @returns {Promise<T>} - A promise that resolves to the parsed JSON response.
   */
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

  /**
   * @method delete
   * @description Sends a DELETE request to the specified endpoint.
   * @param {string} endpoint - The URL to send the DELETE request to.
   * @param {RequestOptions} [options] - Additional options for the request.
   * @returns {Promise<T>} - A promise that resolves to the parsed JSON response.
   */
  delete<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
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
