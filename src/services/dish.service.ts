import { Injectable, NotFoundException } from '@nestjs/common';
import { DishEntity } from 'src/core/entities/dish.entity';
import { DishRepo } from 'src/core/repos/dish.repo';
import { Dish, ResultList } from 'src/core/types';
import { DishSlugParam } from 'src/messages/dish.message';

@Injectable()
export class DishService {
  constructor(private repo: DishRepo) {}

  async findAll(): Promise<ResultList<Dish>> {
    const dishes = await this.repo.findAll();

    return { items: dishes, count: dishes.length };
  }

  async readBySlug(props: DishSlugParam): Promise<DishEntity> {
    const dish = await this.repo.findBySlug(props.dishSlug);

    if (dish == null) {
      throw new NotFoundException(`Dish ${props.dishSlug} not found`);
    }

    return dish;
  }
}
