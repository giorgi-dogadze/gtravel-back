import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from '../entities/restaurant.entity';

@Injectable()
export class RestaurantRepo {
  constructor(
    @InjectRepository(RestaurantEntity)
    private repo: Repository<RestaurantEntity>,
  ) {}

  public async findAll(): Promise<RestaurantEntity[]> {
    return this.repo.find();
  }

  public async save(restaurant: RestaurantEntity): Promise<RestaurantEntity> {
    await this.repo.save(restaurant);
    return restaurant;
  }

  public async findBySlug(slug: string): Promise<RestaurantEntity | undefined> {
    return this.repo.findOne({
      where: { slug },
    });
  }
}
