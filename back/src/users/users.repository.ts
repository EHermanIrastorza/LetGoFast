import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersRepository {
  findOne(arg0: { where: { email: string; }; }) {
    throw new Error('Method not implemented.');
  }
  create(arg0: { password: any; email: string; }) {
    throw new Error('Method not implemented.');
  }
  save(user: any) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getUserRepository(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto){
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findUserByEmail(email: string) {
    const user = await this.userRepository
    .createQueryBuilder('user')
    .where('user.email = :email', { email })
    .addSelect('user.password') 
    .getOne();
     return user;
    // return await this.userRepository.findOne({ where: { email } });
  }
}
