import { AccountModel, Authentication } from '@/domain';
import {
  badRequest,
  Controller,
  HttpResponse,
  ok,
  serverError,
  Validation,
  unauthorized,
  UnauthorizedError,
} from '@/presentation';

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

      const result = await this.authentication.auth(request);

      if (!result) {
        return unauthorized(new UnauthorizedError());
      }

      return ok({});
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AuthenticationController {
  export type Request = Pick<AccountModel, 'email' | 'password'>;
}
