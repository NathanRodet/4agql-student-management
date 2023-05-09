const argon2 = require('argon2');
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  async create(createUserInput: CreateUserInput) {
    const user = await this.usersRepository.findOneBy({ email: createUserInput.email });
    if (user)
      throw new HttpException({ message: 'Email already registered.' }, HttpStatus.NOT_FOUND);
    else {
      const userData = {
        first_name: createUserInput.first_name,
        last_name: createUserInput.last_name,
        email: createUserInput.email,
        password: await argon2.hash(createUserInput.password),
      }
      return await this.usersRepository.save(this.usersRepository.create(userData));
    }
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOneById(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new HttpException({ message: 'User not found.' }, HttpStatus.NOT_FOUND);
    else
      return user;
  }

  async updatePassword(updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.findOneBy({ id: updateUserInput.id });
    if (!user)
      throw new HttpException({ message: 'User not found.' }, HttpStatus.NOT_FOUND);
    else {
      const userData = {
        password: await argon2.hash(updateUserInput.password),
      }
      return await this.usersRepository.update({ id: updateUserInput.id }, userData);
    }
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneBy({ id });
    if (!user)
      throw new HttpException({ message: 'User not found.' }, HttpStatus.NOT_FOUND);
    else
      return await this.usersRepository.delete({ id });
  }
}
