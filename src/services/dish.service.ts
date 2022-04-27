import { Injectable } from '@nestjs/common';
import { DishRepo } from 'src/core/repos/dish.repo';
import { Dish, ResultList } from 'src/core/types';

@Injectable()
export class DishService {
  constructor(private repo: DishRepo) {}

  async findAll(): Promise<ResultList<Dish>> {
    const dishes = await this.repo.findAll();

    return { items: dishes, count: dishes.length };
  }
}
