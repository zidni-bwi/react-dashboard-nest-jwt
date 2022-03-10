import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Connection, Repository} from "typeorm";
import {JwtService} from "@nestjs/jwt";
import {JwtRefreshTokenStrategy} from "./jwt.refreshtoken.strategy";
import { Module } from '@nestjs/common';

import {User} from "./user.entity";
import {Products} from "./products.entity";
import {Customers} from "./customers.entity";

var randtoken = require('rand-token');

@Injectable()
export class AppService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Products) private readonly productsRepository: Repository<Products>,
    @InjectRepository(Customers) private readonly customersRepository: Repository<Customers>
  ) {
  }

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  async getProducts() {
    const product = await this.productsRepository.find();
    // const product = await getRepository(Products) .createQueryBuilder("products") .where("products.name = :users", { users: name }) .getOne();
    // return this.productsRepository.findOne(name);
    // return product
    return product
  }

  async getCustomers() {
    const get = await this.customersRepository.find();
    return get
  }

  async getAccount(userID: any) {
    const get = await this.userRepository.find({where: {id: userID}});
    return get
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
