import { Controller, Get } from '@nestjs/common';
import { ResultList, Restaurant } from 'src/core/types';
import { RestaurantService } from 'src/services/restaurant.service';

@Controller()
export class RestaurantController {
  constructor(private service: RestaurantService) {}

  @Get('/restaurants')
  async findAll(): Promise<ResultList<Restaurant>> {
    const resultList = await this.service.findAll();

    return resultList;
  }
}
