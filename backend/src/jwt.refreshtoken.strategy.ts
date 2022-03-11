import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import {AppService} from './app.service';

@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy,"jwt-refreshtoken") {
  constructor(private AppService:AppService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access'),
      ignoreExpiration: true,
      passReqToCallback:true
    });
  }
  
  async validate(req,payload: any) {
    var user = await this.AppService.findOne(payload.username);
    if(!user){
      throw new UnauthorizedException();
    }
    if(req.body.refreshToken != (await user).refreshtoken){
      throw new UnauthorizedException();
    }
        if( new Date() > new Date((await user).refreshtokenexpires)){
          throw new UnauthorizedException();
        }
        return { userId: payload.sub, username: payload.username };
      }
    }