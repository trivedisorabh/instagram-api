import { AccountModel, AddAccount } from '@/domain';
import {
  badRequest,
  Controller,
  HttpResponse,
  serverError,
  Validation,
  noContent,
  forbidden,
  EmailInUseError,
} from '@/presentation';

export class AddAccountController implements Controller {
  constructor(private readonly validation: Validation, private readonly addAccount: AddAccount) {}

  async handle(request: AddAccountController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const isValid = await this.addAccount.add(request);

      if (!isValid) {
        return forbidden(new EmailInUseError());
      }

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddAccountController {
  export type Request = Omit<AccountModel, 'id'>;
}
