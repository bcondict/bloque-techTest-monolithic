export interface FetchObject {
  url: string;
  headers?: Record<string, string>;
  method: string;
  body?: Record<string, any>;
}
