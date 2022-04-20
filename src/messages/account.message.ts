import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsInt, IsNotEmpty } from 'class-validator';

export class AccountRegistrationBody {
  @ApiProperty()
  @IsString()
  @IsEmail()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  password!: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  name!: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  lastName!: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  @IsInt()
  personalNumber!: string;

  @ApiProperty()
  @IsString()
  @IsEmail()
  phone!: string;
}

export class AccountAuthLoginBody {
  @ApiProperty()
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  password!: string;
}
