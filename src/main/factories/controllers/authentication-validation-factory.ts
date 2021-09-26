import { EmailValidatorAdapter } from '@/infra';
import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/presentation';
import { Validation } from '@/presentation';

export const makeAuthenticationValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};
