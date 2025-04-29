import { TestDriveReservation } from 'src/reserves/entities/reserve.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({select: false})
  password: string;

  @Column()
  birthday: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column({ type: 'varchar', length: 16 })
  credictCard: string;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];

  @OneToMany(
    () => TestDriveReservation,
    (TestDriveReservation) => TestDriveReservation.user,
  )
  TestDriveReservation: TestDriveReservation[];
}
