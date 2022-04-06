import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { UserRepo } from 'src/core/repos/user.repo';
import { v4 as uuid } from 'uuid';

@Injectable()
export class AppService {
  constructor(private userRepo: UserRepo) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<UserEntity[]> {
    const users = await this.userRepo.findAll(0, 1000);
    return users;
  }

  async createUser(): Promise<UserEntity> {
    const user = new UserEntity();

    user.id = uuid();
    user.dataState = 'gio';
    user.email = uuid();
    user.inviteSource = '';
    user.state = '';
    user.isEmailVerified = false;
    user.linkedin = '';
    user.phone = '';
    user.slug = uuid();
    user.state = '';
    user.name = 'gio';

    await this.userRepo.create(user);

    return user;
  }
}
