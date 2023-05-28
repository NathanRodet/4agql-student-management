import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { GenerateToken } from './utils/jwt';
import { Token } from 'graphql';
import { LoginInput } from './dto/login.input';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
const argon2 = require('argon2');
@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService) { }
  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOneByEmail(email);
    if (user && await argon2.verify(user.password, password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}