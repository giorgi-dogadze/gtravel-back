import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { AccountService } from 'src/services/account.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private accountService: AccountService) {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string): Promise<UserEntity> {
    const user = await this.accountService.validateUser(email, password);

    if (user == null) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
