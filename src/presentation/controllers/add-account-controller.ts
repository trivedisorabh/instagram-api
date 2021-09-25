import { AccountModel, AddAccount } from '@/domain';
import { badRequest, Controller, HttpResponse, ok, serverError, Validation } from '@/presentation';

export class AddAccountController implements Controller {
  constructor(private readonly validation: Validation, private readonly addAccount: AddAccount) {}

  async handle(request: AddAccountController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const account = this.addAccount.add(request);
      return ok(account);
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddAccountController {
  export type Request = Omit<AccountModel, 'id'>;
}
