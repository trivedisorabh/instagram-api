import { hash } from 'bcrypt';

import { Hasher } from '@/data';

export class BcryptAdapter implements Hasher {
  constructor(private readonly salt: number) {}

  async hash(data: string): Promise<string> {
    const hashed = await hash(data, this.salt);

    return hashed;
  }
}
