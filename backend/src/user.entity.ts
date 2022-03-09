import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({unique: true})
  username: string;
  
  @Column()
  password: string;
  
  @Column({nullable: true, default: null})
  refreshtoken:string;
 
  @Column({nullable: true, default: null})
  refreshtokenexpires:string;
}
