import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Connection, Repository } from "typeorm";
import { JwtService } from "@nestjs/jwt";
import { Module } from '@nestjs/common';

import { User } from "./user.entity";
import { Products } from "./products.entity";
import { Customers } from "./customers.entity";

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

  async createUser(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(condition: any): Promise<User> {
    return this.userRepository.findOne(condition);
  }

  async verifyToken(id: number, refresh: string) {
    return this.userRepository.find({where: {id: id, refreshtoken: refresh}});
  }

  async getProducts() {
    const product = await this.productsRepository.find();
    return product
  }

  async getCustomers() {
    const get = await this.customersRepository.find();
    return get
  }

  async getAccount(userID: any) {
    const get = await this.userRepository.find({ where: { id: userID } });
    return get
  }

  async createRefreshToken(refreshtoken: string, id: string, refreshtokenexpires) {
    await this. userRepository.update(id, {refreshtoken: refreshtoken, refreshtokenexpires: refreshtokenexpires})
  }

  async generateRefreshToken(id): Promise<string> {
    var refreshtoken = randtoken.generate(16);
    var refreshtokenexpires = new Date();
    refreshtokenexpires.setDate(refreshtokenexpires.getDate() + 6);
    await this.createRefreshToken(refreshtoken, id, refreshtokenexpires);
    return refreshtoken
  }

  async refreshJWT(id: number) {
    const getUser = await this.findOne( id );
    return {
      access: await this.jwtService.sign(
        { 
          id: getUser.id,
          username: getUser.username
        },
        { expiresIn: 4 }
      ),
      refresh: await this.generateRefreshToken(getUser.id)
    }
  }

}
