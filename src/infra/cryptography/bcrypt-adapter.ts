import { hash, compare } from 'bcrypt';

import { HashComparer, Hasher } from '@/data';

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number = 12) {}

  async hash(data: string): Promise<string> {
    const hashed = await hash(data, this.salt);

    return hashed;
  }

  async compare(field: string, fieldToCompare: string): Promise<boolean> {
    const isValid = compare(field, fieldToCompare);
    return isValid;
  }
}
