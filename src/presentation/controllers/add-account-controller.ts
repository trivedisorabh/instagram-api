import { AccountModel, AddAccount, LoadAccountByEmail } from '@/domain';
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
  constructor(
    private readonly validation: Validation,
    private readonly addAccount: AddAccount,
    private readonly loadAccountByEmail: LoadAccountByEmail,
  ) {}

  async handle(request: AddAccountController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const hasAccount = await this.loadAccountByEmail.load({ email: request.email });

      if (hasAccount) {
        return forbidden(new EmailInUseError());
      }

      await this.addAccount.add(request);

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddAccountController {
  export type Request = Omit<AccountModel, 'id'>;
}
