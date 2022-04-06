import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './core/entities/user.entity';
import { UserRepo } from './core/repos/user.repo';

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
    TypeOrmModule.forFeature([UserEntity]),
  ],
  controllers: [AppController],
  providers: [AppService, UserRepo],
})
export class AppModule {}
