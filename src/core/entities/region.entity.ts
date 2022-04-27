import {
  Entity,
  Column,
  PrimaryColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { Region, City } from '../types';
import { CityEntity } from './city.entity';
import { DishEntity } from './dish.entity';

@Entity({ name: 'regions' })
export class RegionEntity implements Region {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar' })
  name!: string | null;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 1,
    name: 'area',
  })
  area!: number; //in sq km

  @Column({ type: 'jsonb', name: 'region_center' })
  regionCenter!: City;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 1,
    name: 'population',
  })
  population!: number;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 1,
    name: 'populationDensity',
  })
  populationDensity!: number;

  @Column({ type: 'varchar', name: 'history' })
  history!: string;

  @Column({ type: 'varchar', name: 'cuisine' })
  cuisine!: string;

  @Column({ type: 'varchar', name: 'description' })
  description!: string;

  @OneToMany(() => CityEntity, (city) => city.region)
  cities!: CityEntity[];

  @ManyToMany(() => DishEntity, (dish) => dish.regions)
  @JoinTable({
    name: 'regions_dishes',
    joinColumn: {
      name: 'region_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'dish_id',
      referencedColumnName: 'id',
    },
  })
  dishes!: DishEntity[];

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
