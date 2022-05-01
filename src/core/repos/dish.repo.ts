import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DishEntity } from '../entities/dish.entity';

@Injectable()
export class DishRepo {
  constructor(
    @InjectRepository(DishEntity)
    private repo: Repository<DishEntity>,
  ) {}

  public async findAll(): Promise<DishEntity[]> {
    return this.repo.find();
  }

  public async save(dish: DishEntity): Promise<DishEntity> {
    await this.repo.save(dish);
    return dish;
  }

  public async findBySlug(slug: string): Promise<DishEntity | undefined> {
    return this.repo.findOne({
      where: { slug },
    });
  }
}
