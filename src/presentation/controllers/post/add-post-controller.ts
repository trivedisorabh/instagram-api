import { PostModel, AddPost } from '@/domain';
import {
  badRequest,
  Controller,
  HttpResponse,
  serverError,
  Validation,
  noContent,
} from '@/presentation';

export class AddPostController implements Controller {
  constructor(private readonly validation: Validation, private readonly addPost: AddPost) {}

  async handle(request: AddPostController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request);

      if (error) {
        return badRequest(error);
      }

      await this.addPost.add(request);

      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export namespace AddPostController {
  export type Request = Omit<PostModel, 'id' & 'createdAt'>;
}
