import { makeDbAuthentication, makeAuthenticationValidation } from '@/main';
import { AuthenticationController } from '@/presentation';
import { Controller } from '@/presentation';

export const makeAuthenticationController = (): Controller => {
  return new AuthenticationController(makeAuthenticationValidation(), makeDbAuthentication());
};
