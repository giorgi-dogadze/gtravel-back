import { Controller, Get, Param } from '@nestjs/common';
import { DishEntity } from 'src/core/entities/dish.entity';
import { ResultList, Dish } from 'src/core/types';
import { DishSlugParam } from 'src/messages/dish.message';
import { DishService } from 'src/services/dish.service';

@Controller()
export class DishController {
  constructor(private service: DishService) {}

  @Get('/dishes')
  async findAll(): Promise<ResultList<Dish>> {
    const resultList = await this.service.findAll();

    return resultList;
  }

  @Get('/dishes/:dishSlug')
  async readBySlug(@Param() param: DishSlugParam): Promise<DishEntity> {
    const dish = await this.service.readBySlug(param);

    return dish;
  }
}
