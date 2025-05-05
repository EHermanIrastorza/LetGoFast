import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}
  async create(createProductDto: CreateProductDto) {
    return await this.productsRepository.createProduct(createProductDto);
  }

  async findAll() {
    return await this.productsRepository.getProducts();
  }

  async findOne(id: string) {
    const productId = await this.productsRepository.getProduct(id);
    if (!productId) {
      throw new NotFoundException(`Product with id ${id} not found`);
    }
    return productId

  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
