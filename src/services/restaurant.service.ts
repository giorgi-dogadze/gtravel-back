import { Injectable } from '@nestjs/common';
import { RestaurantRepo } from 'src/core/repos/restaurant.repo';
import { Restaurant, ResultList } from 'src/core/types';

@Injectable()
export class RestaurantService {
  constructor(private repo: RestaurantRepo) {}

  async findAll(): Promise<ResultList<Restaurant>> {
    const restaurants = await this.repo.findAll();

    return { items: restaurants, count: restaurants.length };
  }
}
