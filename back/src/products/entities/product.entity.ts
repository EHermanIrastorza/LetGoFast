import { TestDriveReservation } from 'src/reserves/entities/reserve.entity';
import { Review } from 'src/reviews/entities/review.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  productName: string;

  @Column({ type: 'varchar', length: 500 })
  productDescription: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  productPrice: number;

  @Column({ type: 'text', nullable: true })
  productImage: string[];

  @Column({ type: 'varchar', length: 50 })
  productModel: string;

  @Column({ type: 'varchar', length: 50 })
  productSpeed: string;

  @Column({ type: 'varchar', length: 50 })
  productGear: string;

  @Column({ type: 'varchar', length: 50 })
  productStyle: string;

  @OneToMany(() => Review, (review) => review.product)
  reviews: Review[];

  @OneToOne(
    () => TestDriveReservation,
    (TestDriveReservation) => TestDriveReservation.product,
  )
  TestDriveReservation: TestDriveReservation;
}
