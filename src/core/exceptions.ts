import { NotAcceptableException } from '@nestjs/common';

//NOTE: returns 406 error code
export class DuplicateEmailOrPersonalNumberException extends NotAcceptableException {
  constructor(email: string, pNumber: string) {
    super(
      `DuplicateEmailOrPersonalNumber => email: ${email} pNumber: ${pNumber}`,
    );
  }
}
