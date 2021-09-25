import { InvalidParamError, Validation, EmailValidator } from '@/presentation';

export class EmailValidation implements Validation {
  constructor(private readonly field: string, private readonly emailValidator: EmailValidator) {}

  validate(input: any): Error {
    if (!this.emailValidator.isValid(input[this.field])) {
      return new InvalidParamError(this.field);
    }
  }
}
