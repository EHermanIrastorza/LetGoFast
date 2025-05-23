import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Product } from 'src/products/entities/product.entity';

@Entity('review')
@Unique(['product', 'user'])
export class Review {
  @PrimaryGeneratedColumn('uuid')
  review_id: string;

  @ManyToOne(() => Product, (product) => product.reviews)
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @ManyToOne(() => User, (user) => user.reviews)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({ nullable: true })
  review: string;

  @CreateDateColumn({ type: 'timestamp' })
  reviewDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  reviewRate: number;
}
