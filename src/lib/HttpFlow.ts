import { HttpFlowOptions, RequestOptions } from "../@types";

/**
 * @class HttpFlow
 * @description A sleek and lightweight wrapper for the Fetch API with support for TypeScript generics.
 * @exports HttpFlow
 */
export default class HttpFlow {
  private _baseURL;

  private _headers = {
    "Content-Type": "application/json",
  };

  constructor(options?: HttpFlowOptions) {
    this._baseURL = options?.baseURL ?? "";

    this._headers = {
      ...this._headers,
      ...options?.headers,
    };
  }

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
    return fetch(`${this._baseURL}${endpoint}`, options)
      .then(async (response) => {
        return (await response.json()) as T;
      })
      .catch((error) => {
        return error;
      });
  }

  // Helper function to handle common request options
  private handleRequestOptions(options?: RequestOptions): RequestOptions {
    if (options && !(options.body instanceof FormData)) {
      options.headers = {
        "Content-Type": "application/json",
        ...options.headers,
      };

      options.body = JSON.stringify(options.body);
    }
    return options as RequestOptions;
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
        ...this._headers,
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
  post<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
    const reqOptions: RequestInit = {
      method: "POST",
      headers: {
        ...this._headers,
        ...options?.headers,
      },
      ...this.handleRequestOptions(options),
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
  put<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
    const reqOptions: RequestInit = {
      method: "PUT",
      headers: {
        ...this._headers,
        ...options?.headers,
      },
      ...this.handleRequestOptions(options),
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
  patch<T = unknown>(endpoint: string, options?: RequestOptions): Promise<T> {
    const reqOptions: RequestInit = {
      method: "PATCH",
      headers: {
        ...this._headers,
        ...options?.headers,
      },
      ...this.handleRequestOptions(options),
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
        ...this._headers,
        ...options?.headers,
      },
      ...options,
    };

    return this.request<T>(endpoint, reqOptions);
  }
}
