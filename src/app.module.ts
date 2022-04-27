import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './core/entities/user.entity';
import { UserRepo } from './core/repos/user.repo';
import { config } from 'dotenv';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AccountController } from './controllers/account.controller';
import { AccountService } from './services/account.service';
import { LocalStrategy } from './strategies/local.strategy';
import { RegionEntity } from './core/entities/region.entity';
import { CityEntity } from './core/entities/city.entity';
import { TravelScheduleEntity } from './core/entities/travel-schedule.entity';
import { DishEntity } from './core/entities/dish.entity';

config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 35000,
      username: 'gtravel',
      password: 'gtravel',
      database: 'gtravel',
      entities: [__dirname + '/../**/**.entity.js'],
      migrationsRun: false,
      synchronize: false,
      logging: false,
    }),
    TypeOrmModule.forFeature([
      UserEntity,
      RegionEntity,
      CityEntity,
      TravelScheduleEntity,
      DishEntity,
    ]),
  ],
  controllers: [AppController, AccountController],
  providers: [
    AppService,
    AccountService,

    UserRepo,

    JwtStrategy,
    LocalStrategy,

    {
      provide: 'JWT_TOKEN',
      useValue: process.env.JWT_TOKEN,
    },

    {
      provide: 'JWT_EXPIRES_IN',
      useValue: process.env.JWT_EXPIRES_IN,
    },
  ],
})
export class AppModule {}
