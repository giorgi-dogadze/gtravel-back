import { In, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepo {
  constructor(
    @InjectRepository(UserEntity)
    private repo: Repository<UserEntity>,
  ) {}

  public async create(user: UserEntity): Promise<UserEntity> {
    return this.repo.save(user);
  }

  public async save(user: UserEntity): Promise<UserEntity> {
    return this.repo.save(user);
  }

  public async findAll(skip: number, take: number): Promise<UserEntity[]> {
    return this.repo.find({
      skip,
      take,
    });
  }

  public async findById(id: string): Promise<UserEntity | undefined> {
    return this.repo.findOne({
      where: { id },
    });
  }

  public async findBySlug(slug: string): Promise<UserEntity | undefined> {
    return this.repo.findOne({
      where: { slug },
    });
  }

  public async findByEmail(email: string): Promise<UserEntity | undefined> {
    return this.repo.findOne({
      where: { email },
    });
  }

  public async findByInvitationToken(
    invitationToken: string,
  ): Promise<UserEntity | undefined> {
    return this.repo.findOne({
      where: { invitationToken },
    });
  }

  public async findByIds(ids: string[]): Promise<UserEntity[]> {
    if (ids.length === 0) {
      return [];
    }

    return this.repo.find({
      where: { id: In(ids) },
    });
  }

  // We are using this method for invited users
  public async delete(userId: string): Promise<void> {
    await this.repo.delete(userId);
  }
}
