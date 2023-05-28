import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UUID } from './dto/params-user.input';
import { UsersService } from './users.service';
import { UseGuards } from '@nestjs/common';
import { UserGuard } from 'src/auth/user.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CurrentUser } from 'src/auth/current-user.decorator';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

  @Mutation(() => User)
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  async findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  async findOneByID(@Args('id', { type: () => String }) id: string) {
    return this.usersService.findOneById(id);
  }

  @Query(() => User, { name: 'findOneUserByName' })
  async findOneByName(@Args('lastName', { type: () => String }) lastName: string) {
    return this.usersService.findOneByName(lastName);
  }


  @UseGuards(JwtAuthGuard, UserGuard)
  @Mutation(() => User)
  async updateUser(@CurrentUser() user: User, @Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @UseGuards(JwtAuthGuard, UserGuard)
  @Mutation(() => Boolean)
  async removeUser( @CurrentUser() user: User,@Args('id', { type: () => String }) id: string)   {
    const result = await this.usersService.remove(id);
    return result.affected > 0;
}
}