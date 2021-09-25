import { EmailValidatorAdapter } from '@/infra';
import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/presentation';
import { Validation } from '@/presentation';

export const makeAddAccountValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  for (const field of ['name', 'email', 'username', 'password']) {
    validations.push(new RequiredFieldValidation(field));
  }

  validations.push(new EmailValidation('email', new EmailValidatorAdapter()));

  return new ValidationComposite(validations);
};
