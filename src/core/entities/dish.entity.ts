import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Dish } from '../types';
import { RegionEntity } from './region.entity';

@Entity({ name: 'regions' })
export class DishEntity implements Dish {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar' })
  name!: string | null;

  @Column({ type: 'varchar', name: 'composition' })
  composition!: string;

  @Column({ type: 'varchar', name: 'history' })
  history!: string;

  @ManyToMany(() => RegionEntity, (region) => region.dishes)
  regions!: RegionEntity[];

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
