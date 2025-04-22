import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getUserRepository(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(createUser) {
    const user = this.userRepository.create(createUser);
    return await this.userRepository.save(user);
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }
}
