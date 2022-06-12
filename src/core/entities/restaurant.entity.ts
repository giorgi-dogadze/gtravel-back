import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Restaurant } from '../types';
import { CityEntity } from './city.entity';

@Entity({ name: 'restaurants' })
export class RestaurantEntity implements Restaurant {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar' })
  name!: string | null;

  @Column({
    type: 'decimal',
    precision: 1,
    name: 'rating',
  })
  rating!: number;

  @Column({ type: 'varchar', name: 'address' })
  address!: string;

  @Column({ type: 'varchar', name: 'image_url', array: true })
  imageUrl!: string[];

  @Column({ type: 'varchar', name: 'description' })
  description!: string;

  @ManyToOne(() => CityEntity, (city) => city.restaurants)
  @JoinColumn({ name: 'city_id' })
  city!: CityEntity;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
