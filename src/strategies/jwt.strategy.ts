import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { UserRepo } from 'src/core/repos/user.repo';
import { User } from 'src/core/types';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('JWT_TOKEN') jwtToken: string,
    private userRepo: UserRepo,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtToken,
    });
  }

  async validate(payload: { sub: string }): Promise<User | null> {
    // TODO: this may become a performance bottleneck, optimize it
    const user = await this.userRepo.findById(payload.sub);

    if (user == null) {
      return null;
    }

    return user;
  }
}
