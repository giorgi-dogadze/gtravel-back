import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/core/entities/user.entity';
import { RegionEntity } from 'src/core/entities/region.entity';
import { CityEntity } from 'src/core/entities/city.entity';
import { DishEntity } from 'src/core/entities/dish.entity';
import { TravelScheduleEntity } from 'src/core/entities/travel-schedule.entity';
import { cities, dishes, regions } from 'src/data';
import { HotelEntity } from 'src/core/entities/hotel.entity';
import { RestaurantEntity } from 'src/core/entities/restaurant.entity';
import { hotels } from 'src/data/hotel.data';
import { restaurants } from 'src/data/restaurant.data';

@Injectable()
export class NukeService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,

    @InjectRepository(TravelScheduleEntity)
    private travelScheduleRepo: Repository<TravelScheduleEntity>,

    @InjectRepository(DishEntity)
    private dishRepo: Repository<DishEntity>,

    @InjectRepository(CityEntity)
    private cityRepo: Repository<CityEntity>,

    @InjectRepository(RegionEntity)
    private regionRepo: Repository<RegionEntity>,

    @InjectRepository(HotelEntity)
    private hotelRepo: Repository<HotelEntity>,

    @InjectRepository(RestaurantEntity)
    private restaurantRepo: Repository<RestaurantEntity>,
  ) {}

  public async nuke(): Promise<string> {
    // NOTE: how to find all tables?
    // 1. Search for @Entity add @JoinTable to find tables in the codebase
    // 2. SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';
    await this.userRepo.query('TRUNCATE TABLE users CASCADE');
    await this.travelScheduleRepo.query(
      'TRUNCATE TABLE travel_schedules CASCADE',
    );
    await this.dishRepo.query('TRUNCATE TABLE dishes CASCADE');
    await this.cityRepo.query('TRUNCATE TABLE cities CASCADE');
    await this.regionRepo.query('TRUNCATE TABLE regions CASCADE');
    await this.hotelRepo.query('TRUNCATE TABLE hotels CASCADE');
    await this.restaurantRepo.query('TRUNCATE TABLE restaurants CASCADE');

    // await this.userRepo.save(fields);
    // await this.travelScheduleRepo.save(categories);

    await this.dishRepo.save(dishes);
    await this.hotelRepo.save(hotels);
    await this.restaurantRepo.save(restaurants);

    await this.cityRepo.save(cities);

    await this.regionRepo.save(regions);

    return '🚀☢️ 🚀☢️ 🚀☢️';
  }

  private async chunk<T>(items: T[], fn: (chunk: T[]) => Promise<T[]>) {
    const numChunks = 100;
    const chunkSize = Math.floor(items.length / numChunks);

    for (let i = 0; i < numChunks; i++) {
      await fn(items.slice(i * chunkSize, (i + 1) * chunkSize));
    }

    if (chunkSize * numChunks < items.length) {
      await fn(items.slice(chunkSize * numChunks, items.length));
    }
  }
}
