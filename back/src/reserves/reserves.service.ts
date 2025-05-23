import { Injectable } from '@nestjs/common';
import { CreateReserveDto } from './dto/create-reserve.dto';
// import { UpdateReserveDto } from './dto/update-reserve.dto';
import { ReservesRepository } from './reserves.repository';

@Injectable()
export class ReservesService {
  constructor(private readonly reservesRepository: ReservesRepository) {}
  async create(createReserveDto: CreateReserveDto) {
    return await this.reservesRepository.createReserve(createReserveDto);
  }

  findAll() {
    return `This action returns all reserves`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reserve`;
  }

  // update(id: number, updateReserveDto: UpdateReserveDto) {
  //   return `This action updates a #${id} reserve`;
  // }

  remove(id: number) {
    return `This action removes a #${id} reserve`;
  }
}
