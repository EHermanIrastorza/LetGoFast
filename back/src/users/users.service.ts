import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './users.repository';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserDto: CreateUserDto):Promise<User> {
    const user = await this.findByEmail(createUserDto.email);
    if (user) {
      throw new BadRequestException('Mail is in use');
    }
    return await this.usersRepository.createUser(createUserDto);
  }

  async findByEmail(email: string) {
    return await this.usersRepository.findUserByEmail(email);
  }

  findAll() {
    return this.usersRepository.getUserRepository();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
