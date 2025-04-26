import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TestDriveReservation } from './entities/reserve.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateReserveDto } from './dto/create-reserve.dto';

@Injectable()
export class ReservesRepository {
  constructor(
    @InjectRepository(TestDriveReservation)
    private readonly ReservesRepository: Repository<TestDriveReservation>,
    @InjectRepository(User)
    private readonly userRepository: User,
    @InjectRepository(Product)
    private readonly productRepository: Product,
  ) {}
  async createReserve(createReserveDto: CreateReserveDto) {
    const newReserve = this.ReservesRepository.create({
      date: createReserveDto.date,
      time: createReserveDto.time,
    });
    return await this.ReservesRepository.save(newReserve);
  }
  public async getReserves() {
    return await Promise.resolve({ message: 'Hello World' });
  }
}
