import { Module } from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { ReservesController } from './reserves.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestDriveReservation } from './entities/reserve.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { ReservesRepository } from './reserves.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestDriveReservation, User, Product])],
  controllers: [ReservesController],
  providers: [ReservesService, ReservesRepository],
})
export class ReservesModule {}
