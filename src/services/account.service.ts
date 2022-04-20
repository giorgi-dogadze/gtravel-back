import { Injectable, Inject } from '@nestjs/common';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';
import { formatISO } from 'date-fns';
import { DuplicateEmailOrPersonalNumberException } from 'src/core/exceptions';
import { UserEntity } from 'src/core/entities/user.entity';
import { UserRepo } from 'src/core/repos/user.repo';
import { User } from 'src/core/types';
import { makeSlug } from 'src/core/utils';
import { AccountRegistrationBody } from 'src/messages/account.message';
import { hash } from 'bcrypt';

@Injectable()
export class AccountService {
  constructor(
    private userRepo: UserRepo,
    @Inject('JWT_TOKEN') private jwtToken: string,
    @Inject('JWT_EXPIRES_IN') private jwtExpiresIn: string,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserEntity | null> {
    const user = await this.userRepo.findByEmail(email);

    if (user == null) {
      return null;
    }

    const isPasswordCorrect = await compare(password, user.passwordHash);

    if (!isPasswordCorrect) {
      return null;
    }

    return user;
  }

  async getUser(initialUser: User): Promise<UserEntity> {
    const user = await this.userRepo.findById(initialUser.id);
    return user;
  }

  async create(props: AccountRegistrationBody): Promise<{ token: string }> {
    const user = new UserEntity();

    user.id = uuid();
    user.slug = makeSlug();
    user.email = props.email.toLowerCase();
    user.passwordHash = await hash(props.password, 10);
    user.name = props.name;
    user.lastName = props.lastName;
    user.personalNumber = props.personalNumber;
    user.phone = props.phone;
    user.createdAt = formatISO(new Date());
    user.updatedAt = formatISO(new Date());

    try {
      await this.userRepo.create(user);

      return { token: this.generateToken(user) };
    } catch (err: any) {
      // "23505" is an error code for unique violation
      // https://www.postgresql.org/docs/13/errcodes-appendix.html
      if (err.code === '23505') {
        throw new DuplicateEmailOrPersonalNumberException(
          user.email,
          user.personalNumber,
        );
      }

      throw err;
    }
  }

  generateToken(user: { id: string; email: string }): string {
    const payload = {
      email: user.email,
      sub: user.id,
    };

    const token = sign(payload, this.jwtToken, {
      expiresIn: this.jwtExpiresIn,
    });

    return token;
  }
}
