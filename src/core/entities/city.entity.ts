import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { Sightseeing, City, User } from '../types';
import { HotelEntity } from './hotel.entity';
import { RegionEntity } from './region.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity({ name: 'cities' })
export class CityEntity implements City {
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

  @Column({
    type: 'decimal',
    precision: 9,
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

  @Column({ type: 'varchar', name: 'description' })
  description!: string;

  @Column({ type: 'jsonb', name: 'sightseeing' })
  sightseeing!: Sightseeing;

  @Column({ type: 'varchar', name: 'history' })
  history!: string;

  @Column({ type: 'varchar', name: 'image_url', array: true })
  imageUrl!: string[];

  @ManyToOne(() => RegionEntity, (region) => region.cities)
  @JoinColumn({ name: 'region_id' })
  region!: RegionEntity;

  @OneToMany(() => HotelEntity, (hotel) => hotel.city)
  hotels!: HotelEntity[];

  @OneToMany(() => RestaurantEntity, (restaurant) => restaurant.city)
  restaurants!: RestaurantEntity[];

  @OneToOne(() => RegionEntity, (region) => region.regionCenter) // specify inverse side as a second parameter
  regionCenter: User;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
