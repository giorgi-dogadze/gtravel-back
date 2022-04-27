import { Entity, Column, PrimaryColumn } from 'typeorm';
import { TravelSchedule, TransportType } from '../types';

@Entity({ name: 'travel-schedules' })
export class TravelScheduleEntity implements TravelSchedule {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar', name: 'type' })
  type!: TransportType;

  @Column({ type: 'varchar', name: 'workDays' })
  workDays!: string;

  @Column({ type: 'varchar', name: 'workYours' })
  workYours!: string;

  @Column({
    type: 'decimal',
    precision: 7,
    scale: 1,
    name: 'ticketPrice',
  })
  ticketPrice!: number;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
