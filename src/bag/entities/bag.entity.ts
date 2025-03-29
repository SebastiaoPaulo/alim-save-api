import { BagType, RetrieveForm } from 'src/utils/enum';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v7 as uuidv7 } from 'uuid';

@Entity()
export class Bag {
  @PrimaryGeneratedColumn('uuid')
  id: string = uuidv7();

  @Column()
  description: string;

  @Column('numeric', { precision: 10, scale: 2 })
  price: number;

  @Column({
    name: 'bag_type',
    type: 'enum',
    enum: BagType,
    nullable: true,
  })
  type: BagType;

  @Column({ name: 'qtd_available' })
  qtdAvailable: number;

  @Column({ name: 'qtd_sold' })
  qtdSold: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Column({
    name: 'retrieve_form',
    type: 'enum',
    enum: RetrieveForm,
    nullable: true,
  })
  retrieveForm: RetrieveForm;

  // establishmentFK;
}
