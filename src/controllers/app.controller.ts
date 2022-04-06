import { Controller, Get, Post } from '@nestjs/common';
import { UserEntity } from 'src/core/entities/user.entity';
import { AppService } from '../services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/users')
  getUsers(): Promise<UserEntity[]> {
    return this.appService.getUsers();
  }

  @Post('/users')
  createUser(): Promise<UserEntity> {
    return this.appService.createUser();
  }
}