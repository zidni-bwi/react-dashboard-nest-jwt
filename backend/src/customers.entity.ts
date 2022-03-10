import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('customers')
export class Customers {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  order_ref: string;
  
  @Column()
  customer: string;

  @Column()
  date: Date;

  @Column()
  status: number;
}
