import { Inject, Injectable } from '@nestjs/common';
import { User } from './entities/user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    private  user: User[] = [];

  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(user: User) {
    this.usersRepository.create(user);
    this.usersRepository.insert(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return await this.usersRepository.findOneBy({ id });
  }

  async remove(id: string) { 
    return await this.usersRepository.delete(id);
  }

  async update(UserToUpdate: User, id: string): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    const updated = Object.assign(UserToUpdate, user);

    return await this.usersRepository.save(updated);
  }
}