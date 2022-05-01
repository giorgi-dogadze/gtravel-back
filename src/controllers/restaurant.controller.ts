import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantEntity } from 'src/core/entities/restaurant.entity';
import { ResultList, Restaurant } from 'src/core/types';
import { RestaurantSlugParam } from 'src/messages/restaurant.message';
import { RestaurantService } from 'src/services/restaurant.service';

@Controller()
export class RestaurantController {
  constructor(private service: RestaurantService) {}

  @Get('/restaurants')
  async findAll(): Promise<ResultList<Restaurant>> {
    const resultList = await this.service.findAll();

    return resultList;
  }

  @Get('/restaurants/:restaurantSlug')
  async readBySlug(
    @Param() param: RestaurantSlugParam,
  ): Promise<RestaurantEntity> {
    const restaurant = await this.service.readBySlug(param);

    return restaurant;
  }
}
