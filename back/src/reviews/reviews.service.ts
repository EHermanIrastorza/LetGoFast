import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// import { UpdateReviewDto } from './dto/update-review.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  async createReview(createReviewDto: CreateReviewDto): Promise<Review> {
    const { user_id, product_id, reviewRate, review } = createReviewDto;
    const user = await this.userRepository.findOne({ where: { id: user_id } });
    const product = await this.productRepository.findOne({
      where: { id: product_id },
    });

    if (!user || !product)
      throw new NotFoundException('User or Product not found');
    const alreadyReview = await this.reviewRepository.findOne({
      where: { user, product },
    });
    if (alreadyReview) throw new BadRequestException('Review already exists');

    const newreview = this.reviewRepository.create({
      user,
      product,
      review,
      reviewRate,
    });

    return await this.reviewRepository.save(newreview);
  }
  async getAllReviews(): Promise<Review[]> {
    return this.reviewRepository.find({ relations: ['user', 'product'] });
  }

  async getReviewByUserId(userId: string): Promise<Review[]> {
    return this.reviewRepository.find({
      where: { user: { id: userId } },
      relations: ['products'],
    });
  }
  findAll() {
    return `This action returns all reviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} review`;
  }

  // update(id: number, UpdateReviewDto: UpdateReviewDto) {
  //   return `This action updates a #${id} review`;
  // }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
