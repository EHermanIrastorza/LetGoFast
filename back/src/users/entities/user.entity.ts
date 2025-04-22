import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'varchar', length: 50, unique: true })
  email: string;

  @Column({ select: false })
  password: string;

  @Column()
  birthday: string;

  @Column({ type: 'varchar', length: 50 })
  city: string;

  @Column()
  credictCard: number;
}
