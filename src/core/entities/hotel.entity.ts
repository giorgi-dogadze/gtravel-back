import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Hotel } from '../types';
import { CityEntity } from './city.entity';

@Entity({ name: 'hotels' })
export class HotelEntity implements Hotel {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar' })
  name!: string | null;

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 2,
    name: 'rating',
  })
  rating!: number;

  @Column({ type: 'varchar', name: 'address' })
  address!: string;

  @Column({ type: 'uuid', name: 'image_url', array: true })
  imageUrl!: string[];

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
    name: 'price',
    nullable: true,
  })
  price!: number | null;

  @ManyToOne(() => CityEntity, (city) => city.hotels)
  @JoinColumn({ name: 'city_id' })
  city!: CityEntity;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
