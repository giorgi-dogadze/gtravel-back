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
}
