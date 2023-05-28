import {Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { GenerateToken } from './utils/jwt';
import { TokenStructure } from './dto/login.input';
const argon2 = require('argon2');
@Injectable()
export class AuthService {

  constructor(private userService: UsersService, private jwtService: JwtService) { }

  async login(user: User) {
    const payload: TokenStructure = { id: user.id, role: user.role };
    return {
      access_token: GenerateToken(payload),
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