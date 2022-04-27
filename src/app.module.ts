import { Module } from '@nestjs/common';
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
import { CityController } from './controllers/city.controller';
import { RegionController } from './controllers/region.controller';
import { TravelScheduleController } from './controllers/travel-schedule.controller';
import { DishController } from './controllers/dish.controller';
import { CityRepo } from './core/repos/city.repo';
import { DishRepo } from './core/repos/dish.repo';
import { RegionRepo } from './core/repos/region.repo';
import { TravelScheduleRepo } from './core/repos/travel-schedule.repo';
import { CityService } from './services/city.service';
import { DishService } from './services/dish.service';
import { RegionService } from './services/region.service';
import { TravelScheduleService } from './services/travel-schedule.service';

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
  controllers: [
    AccountController,
    RegionController,
    CityController,
    DishController,
    TravelScheduleController,
  ],
  providers: [
    AccountService,
    RegionService,
    CityService,
    DishService,
    TravelScheduleService,

    UserRepo,
    RegionRepo,
    CityRepo,
    DishRepo,
    TravelScheduleRepo,

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
