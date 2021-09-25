import { ValidationComposite, RequiredFieldValidation } from '@/presentation';
import { Validation } from '@/presentation/protocols';

export const makeAddAccountValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  for (const field of ['name', 'email', 'username', 'password']) {
    validations.push(new RequiredFieldValidation(field));
  }

  return new ValidationComposite(validations);
};
