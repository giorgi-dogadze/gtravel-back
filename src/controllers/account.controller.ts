import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { User } from 'src/core/types';
import { ActiveUser } from 'src/core/utils';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { LocalAuthGuard } from 'src/guards/local.guard';
import {
  AccountAuthLoginBody,
  AccountRegistrationBody,
} from 'src/messages/account.message';
import { AccountService } from 'src/services/account.service';

@Controller()
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/account/auth/me')
  async getUser(@ActiveUser() user: User): Promise<User> {
    return user;
  }

  @Post('/account/register')
  async create(
    @Body() body: AccountRegistrationBody,
  ): Promise<{ token: string }> {
    return await this.service.create(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/account/auth/login')
  async login(
    @Body() body: AccountAuthLoginBody,
    @ActiveUser() user: User,
  ): Promise<{ user: User; token: string }> {
    const token = this.service.generateToken(user);
    const loginContent = { token, user };

    return loginContent;
  }
}
