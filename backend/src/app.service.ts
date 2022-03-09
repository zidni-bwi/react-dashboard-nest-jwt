import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import {JwtRefreshTokenStrategy} from "./jwt.refreshtoken.strategy";
import { Module } from '@nestjs/common';


var randtoken = require('rand-token');

@Injectable()
export class AppService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
  }
  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }
  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  async saveorupdateRefreshToke(refreshToken:string, id:string, refreshtokenexpires) {
    await this.userRepository.update(
      id,
      {
        refreshtoken:refreshToken,
        refreshtokenexpires
      }
      );
   }
   async generateRefreshToken(userId):  Promise<string> {
    var refreshToken = randtoken.generate(16);
    var expirydate =new Date();
    expirydate.setDate(expirydate.getDate() + 6);
    await this.saveorupdateRefreshToke(refreshToken, userId, expirydate);
    return refreshToken
  }

  async login(user:any){
    console.log(user)
    return{
      access: await this.jwtService.sign(
        {username: user},
        {expiresIn: 4}
      ),
      refresh: await this.generateRefreshToken(user)
    }
  }

  }
