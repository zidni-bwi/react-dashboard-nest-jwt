import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';

import {User} from "./user.entity";
import {Products} from "./products.entity";
import {Customers} from "./customers.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nest-jwt',
      // type: 'sqlite', // sqlite
      // database: 'nest-jwt.sqlite3',
      entities: [User, Products, Customers],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Products, Customers]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
