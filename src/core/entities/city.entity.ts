import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Sightseeing, City, User } from '../types';
import { RegionEntity } from './region.entity';

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

  @Column({ type: 'varchar', name: 'description' })
  description!: string;

  @Column({ type: 'jsonb', name: 'sightseeing' })
  sightseeing!: Sightseeing;

  @Column({ type: 'varchar', name: 'history' })
  history!: string;

  @ManyToOne(() => RegionEntity, (region) => region.cities)
  @JoinColumn({ name: 'region_id' })
  region!: RegionEntity;

  @OneToOne(() => RegionEntity, (region) => region.regionCenter) // specify inverse side as a second parameter
  regionCenter: User;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
