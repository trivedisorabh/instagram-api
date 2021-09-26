import { sign } from 'jsonwebtoken';

import { Encrypter } from '@/data';

export class JsonWebTokenAdapter implements Encrypter {
  constructor(private readonly secret: string) {}

  async encrypt(data: string): Promise<string> {
    const encrypted = sign(data, this.secret);
    return encrypted;
  }
}
