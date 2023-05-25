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
    public usersRepository: Repository<User>,
  ) { }

  async create(createUserInput: CreateUserInput) {
    const user = await this.usersRepository.findOneBy({ email: createUserInput.email });
    if (user)
      throw new HttpException({ message: 'Email already registered.' }, HttpStatus.NOT_FOUND);
    else {
      const userData = {
        firstName: createUserInput.firsName,
        lastName: createUserInput.lastName,
        pseudo: createUserInput.pseudo, 
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

  async findOneByName(lastName: string) {
    const user = await this.usersRepository.findOneBy({ lastName });
    if (!user)
      throw new HttpException({ message: 'User not found.' }, HttpStatus.NOT_FOUND);
    else
      return user;
  }


  async update(updateUserInput: UpdateUserInput) {
    const user = await this.usersRepository.findOneBy({ id: updateUserInput.id });
    if (!user)
      throw new HttpException({ message: 'User not found.' }, HttpStatus.NOT_FOUND);
    else {
      const userData = {
        password: await argon2.hash(updateUserInput.password),
        role: updateUserInput.role,
      }
      await this.usersRepository.update({ id: updateUserInput.id }, userData);
      return this.usersRepository.findOneBy({ id: updateUserInput.id });
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
