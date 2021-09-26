import { AccountModel, Authentication } from '@/domain';
import { badRequest, Controller, HttpResponse, serverError, Validation } from '@/presentation';

export class AuthenticationController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly authentication: Authentication,
  ) {}

  async handle(request: AuthenticationController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      const isValid = await this.authentication.auth(request);

      return null;
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AuthenticationController {
  export type Request = Pick<AccountModel, 'email' | 'password'>;
}
