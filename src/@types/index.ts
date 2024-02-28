export interface RequestOptions extends RequestInit {
  body?: any;
}

export type HttpFlowOptions = {
  baseURL?: string;
  headers?: HeadersInit;
};
