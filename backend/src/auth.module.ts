import { Module } from '@nestjs/common';
import { JwtRefreshTokenStrategy } from './jwt.refreshtoken.strategy';

@Module({
    providers: [JwtRefreshTokenStrategy]
})

export class AuthModule { }