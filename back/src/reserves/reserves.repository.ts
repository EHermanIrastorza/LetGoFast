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
    private readonly userRepository: Repository<User>,

    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}
  async createReserve(createReserveDto: CreateReserveDto) {
    const { date, time, user_id, product_id } = createReserveDto;

    const user = await this.userRepository.findOne({ where: { id: user_id } });
    if (!user) throw new Error('Usuario no encontrado');

    const product = await this.productRepository.findOne({
      where: { id: product_id },
    });
    if (!product) throw new Error('Producto no encontrado');

    const existing = await this.ReservesRepository.findOne({
      where: { date, time, product: { id: product_id } },
    });
    if (existing)
      throw new Error('Ese turno ya está reservado para este producto');

    const newReserve = this.ReservesRepository.create({
      date,
      time,
      user,
      product,
    });

    return await this.ReservesRepository.save(newReserve);
  }
  public async getReserves() {
    return await Promise.resolve({ message: 'Hello World' });
  }
}
