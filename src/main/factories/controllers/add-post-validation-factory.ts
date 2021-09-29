import { ValidationComposite } from '@/presentation';
import { Validation } from '@/presentation';

export const makeAddPostValidation = (): ValidationComposite => {
  const validations: Validation[] = [];

  return new ValidationComposite(validations);
};
