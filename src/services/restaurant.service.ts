import { Injectable, NotFoundException } from '@nestjs/common';
import { RestaurantEntity } from 'src/core/entities/restaurant.entity';
import { RestaurantRepo } from 'src/core/repos/restaurant.repo';
import { Restaurant, ResultList } from 'src/core/types';
import { RestaurantSlugParam } from 'src/messages/restaurant.message';

@Injectable()
export class RestaurantService {
  constructor(private repo: RestaurantRepo) {}

  async findAll(): Promise<ResultList<Restaurant>> {
    const restaurants = await this.repo.findAll();

    return { items: restaurants, count: restaurants.length };
  }

  async readBySlug(props: RestaurantSlugParam): Promise<RestaurantEntity> {
    const restaurant = await this.repo.findBySlug(props.restaurantSlug);

    if (restaurant == null) {
      throw new NotFoundException(
        `Restaurant ${props.restaurantSlug} not found`,
      );
    }

    return restaurant;
  }
}
