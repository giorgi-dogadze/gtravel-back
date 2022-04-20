import { Entity, Column, PrimaryColumn } from 'typeorm';
import { User } from '../types';

@Entity({ name: 'users' })
export class UserEntity implements User {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({ type: 'varchar', name: 'password_hash' })
  passwordHash!: string;

  @Column({ type: 'varchar' })
  name!: string | null;

  @Column({ type: 'varchar', name: 'last_name' })
  lastName!: string;

  @Column({ type: 'varchar', name: 'personal_number', unique: true })
  personalNumber!: string;

  @Column({ type: 'varchar' })
  phone!: string;

  @Column({ type: 'timestamp', name: 'created_at' })
  createdAt!: string;

  @Column({ type: 'timestamp', name: 'updated_at' })
  updatedAt!: string;
}
