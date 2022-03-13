import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { Response, Request } from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private jwtService: JwtService
  ) {

  }

  @Post('register')
  async register(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    const getuser = await this.appService.findOne({ username });
    if (getuser) {
      throw new BadRequestException('username sudah ada');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.appService.createUser({ // register user baru
      username,
      password: hashedPassword
    });
    delete user.password;
    return {

    };
  }

  @Post('login')
  async login(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    const getUser = await this.appService.findOne({ username });
    if (!getUser) { // Jika username tidak cocok
      throw new BadRequestException('username tidak ditemukan');
    }
    if (!await bcrypt.compare(password, getUser.password)) { // Jika password tidak cocok
      throw new BadRequestException('password salah');
    }

    return {
      access: await this.jwtService.sign(
        {
          id: getUser.id,
          username: getUser.username
        },
        { expiresIn: 4 }
      ),
      refresh: await this.appService.generateRefreshToken(getUser.id)
    };
  }

  @Post('products')
  async products(
    @Body('name') name: string,
    @Res({ passthrough: true }) response: Response) {
    const getProducts = await this.appService.getProducts();
    return getProducts;
  }

  @Post('customers')
  async customers(
    @Body('name') name: string,
    @Res({ passthrough: true }) response: Response) {
    const getProducts = await this.appService.getCustomers();
    return getProducts;
  }

  @Post('refreshtoken')
  async refreshToken(
    @Body('id') id: number,
    @Body('refresh') refresh: string
    ) {
    const getUser = await this.appService.findOne( id )
    const verify = await this.appService.verifyToken(id, refresh);
    if (!verify) {
      throw new UnauthorizedException();
    }
    if (new Date() > new Date(getUser.refreshtokenexpires)) {
      throw new UnauthorizedException();
    }
    return await this.appService.refreshJWT(getUser.id)
  }

  @Get('notes')
  async notes() {
    return {
      status: "ping sukses"
    }
  }
}
