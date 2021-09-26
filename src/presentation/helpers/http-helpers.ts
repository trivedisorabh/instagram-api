import { HttpResponse, ServerError } from '@/presentation';

export const ok = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const noContent = (): HttpResponse => ({
  statusCode: 204,
});

export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const unauthorized = (error: Error): HttpResponse => ({
  statusCode: 401,
  body: error,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const serverError = (error: any): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});
