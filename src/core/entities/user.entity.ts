import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryColumn({ type: 'uuid' })
  id!: string;

  @Column({ type: 'varchar', unique: true })
  slug!: string;

  @Column({ type: 'varchar', unique: true })
  email!: string;

  @Column({ name: 'is_email_verified', type: 'boolean' })
  isEmailVerified!: boolean;

  @Column({ type: 'varchar' })
  state!: string;

  @Column({ type: 'varchar', name: 'data_state' })
  dataState!: string;

  @Column({ type: 'varchar', name: 'invite_source' })
  inviteSource!: string | null;

  @Column({ type: 'varchar', nullable: true })
  name!: string | null;

  @Column({ type: 'varchar', nullable: true })
  phone!: string | null;

  @Column({ type: 'varchar', nullable: true })
  linkedin!: string | null;
}
