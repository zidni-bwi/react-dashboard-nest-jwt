import {Column, Entity, PrimaryGeneratedColumn, ObjectIdColumn, ObjectID} from "typeorm";
// import {ObjectID} from "mongodb";

@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID;
  
  @Column({unique: true})
  username: string;
  
  @Column()
  password: string;
  
  @Column({nullable: true, default: null})
  refreshtoken:string;
 
  @Column({nullable: true, default: null})
  refreshtokenexpires:string;
}
