import { HttpResponse } from '@/presentation';

export interface Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}
