import { Controller, Get } from '@nestjs/common';
import { ResultList, Dish } from 'src/core/types';
import { DishService } from 'src/services/dish.service';

@Controller()
export class DishController {
  constructor(private readonly service: DishService) {}

  @Get('/dishes')
  async findAll(): Promise<ResultList<Dish>> {
    const resultList = await this.service.findAll();

    return resultList;
  }
}
