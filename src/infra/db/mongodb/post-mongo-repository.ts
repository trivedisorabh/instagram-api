import { AddPostRepository } from '@/data';
import { MongoHelper } from '@/infra';

export class PostMongoRepository implements AddPostRepository {
  async add(params: AddPostRepository.AddParams): Promise<boolean> {
    const collection = MongoHelper.getCollection('posts');
    const result = await collection.insertOne(params);
    return !!result.insertedId;
  }
}
