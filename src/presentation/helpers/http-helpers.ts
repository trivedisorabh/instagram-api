import { HttpResponse } from '@/presentation';

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});
