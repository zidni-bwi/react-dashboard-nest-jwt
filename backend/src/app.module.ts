import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';

import {User} from "./user.entity";
import {Products} from "./products.entity";
import {Customers} from "./customers.entity";
import {JwtModule} from "@nestjs/jwt";

// import { AuthModule } from './auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'nest-jwt',
      entities: [User, Products, Customers],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Products, Customers]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    }),
    // AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
