import { Review } from 'src/reviews/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 20 })
  productName: string;

  @Column({ type: 'varchar', length: 50 })
  productDescription: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  productPrice: number;

  @Column({ type: 'text', nullable: true })
  productImage: string;

  @Column({ type: 'varchar', length: 20 })
  productModel: string;

  @Column({ type: 'varchar', length: 20 })
  productSpeed: string;

  @Column({ type: 'varchar', length: 20 })
  productGear: string;

  @Column({ type: 'varchar', length: 20 })
  productStyle: string;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];
}
