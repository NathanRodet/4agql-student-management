import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassService } from './class.service';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';
import { Class } from './entities/class.entity';
import { UUID } from './dto/params-user.input';

@Resolver('Class')
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}

  @Mutation(() => Class)
  async create(@Args('createClassInput') createClassInput: CreateClassInput) {
    return this.classService.create(createClassInput);
  }

  @Query(() => [Class], { name: 'GetAllClass' })
  async findAll() {
    return this.classService.findAll();
  }

  @Query(() => Class, { name: 'findOneClass' })
  async findOne(@Args('id', { type: () => String }) id: UUID) {
    return this.classService.findOneById(id.id);
  }

  @Mutation(() => Class)
  async update(@Args('updateClassInput') updateClassInput: UpdateClassInput) {
    return this.classService.update(updateClassInput.id, updateClassInput);
  }

 @Mutation(() => Boolean)
  async remove(@Args('id') id: string) {
    return this.classService.remove(id);
  }
}



// @Mutation(() => Boolean)
// async removeUser(@Args('id', { type: () => String }) id: string)   {
//   const result = await this.usersService.remove(id);
//   return result.affected > 0;
// }