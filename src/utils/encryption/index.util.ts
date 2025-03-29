import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class EncryptionUtils {
  public async encryptPassword(password: string) {
    const saltOrRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltOrRounds);

    return encryptedPassword;
  }

  public async doesPasswordMatch(password: string, encryptedPassword: string) {
    return await bcrypt.compare(password, encryptedPassword);
  }
}
