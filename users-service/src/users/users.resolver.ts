import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UsersService } from './users.service';
import { Roles } from 'src/auth/guards/auth.decorator';
import { Role } from 'src/auth/guards/auth.enum';

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

  
  @Roles(Role.student, Role.professor)
  @Mutation(() => User)
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Roles(Role.student, Role.professor)
  @Mutation(() => Boolean)
  async removeUser(@Args('id', { type: () => String }) id: string){
    const result = await this.usersService.remove(id);
    return result.affected > 0;
}
}