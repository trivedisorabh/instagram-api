import { AccountModel, AddAccount } from '@/domain';
import { Controller, HttpResponse, ok } from '@/presentation';

export class AddAccountController implements Controller {
  constructor(private readonly addAccount: AddAccount) {}

  async handle(request: AddAccountController.Request): Promise<HttpResponse> {
    console.log({ request });
    const account = this.addAccount.add(request);
    return ok(account);
  }
}

export namespace AddAccountController {
  export type Request = Omit<AccountModel, 'id'>;
}
