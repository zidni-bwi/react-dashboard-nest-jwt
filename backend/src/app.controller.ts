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
  ){
    
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
    const user = await this.appService.create({ // register user baru
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
    const user = await this.appService.findOne({ username });
    if (!user) { // Jika username tidak cocok
      throw new BadRequestException('username tidak ditemukan');
    }
    if (!await bcrypt.compare(password, user.password)) { // Jika password tidak cocok
      throw new BadRequestException('password salah');
    }
    return {
      access: await this.jwtService.sign(
        { username: user.username },
        { expiresIn: 4 }
      ),
      refresh: await this.appService.generateRefreshToken(user.id)
    };
  }

  @Post('acounts')
  async accounts(
    @Body('username') username: string,
    @Body('password') password: string,
    @Res({ passthrough: true }) response: Response
  ) {
    const getuser = await this.appService.findOne({ username });
    if (getuser) {
      throw new BadRequestException('username sudah ada');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await this.appService.create({ // register user baru
      username,
      password: hashedPassword
    });
    delete user.password;
    return {
      
    };
  }

  @Post('products')
  async products(
    @Body('name') name: string,
    @Res({ passthrough: true }) response: Response) {
      const getProducts = await this.appService.getProducts();
      // const error = console.log('error')
      return getProducts;
  }

  @Post('customers')
  async customers(
    @Body('name') name: string,
    @Res({ passthrough: true }) response: Response) {
      const getProducts = await this.appService.getCustomers();
      // const error = console.log('error')
      return getProducts;
  }

  @Post('account')
  async account(
    @Body('userID') userID: string,
    @Res({ passthrough: true }) response: Response) {
      const get = await this.appService.getAccount({userID});
      return get;
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt']; // Cek Cookie
      const data = await this.jwtService.verifyAsync(cookie); // Verifikasi Cookie
      if (!data) { // Jika data tidak valid
        throw new UnauthorizedException();
      }
      const user = await this.appService.findOne({ id: data['id'] }); // Get user by id
      const { password, ...result } = user;
      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }

  @Post('refreshtoken')
  async refreshToken(@Req() request: Request) {
    return await this.appService.login(request.user)
  }

  @Get('notes')
  async notes(@Req() request: Request) {
    return {
      status: "oke"
    }
  }
}
