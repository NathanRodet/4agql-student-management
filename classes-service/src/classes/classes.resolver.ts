import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UUID } from './dto/params-user.input';
import { ClassesService } from './classes.service';
import { Classes } from './entities/classes.entity';
import { CreateClassesInput } from './dto/create-class.input';
import { UpdateClassesInput } from './dto/update-class.input';

@Resolver('Classes')
export class ClassesResolver {
  constructor(private readonly classesService: ClassesService) {}

  @Mutation(() => Classes)
  async create(@Args('createClassInput') createClassInput: CreateClassesInput) {
    return this.classesService.create(createClassInput);
  }

  @Query(() => [Classes], { name: 'GetAllClass' })
  async findAll(@Args('id', { type: () => String }) id: UUID) {
    return this.classesService.findAll();
  }

  @Query(() => Classes, { name: 'findOneClass' })
  async findOne(@Args('id', { type: () => String }) id: UUID) {
    return this.classesService.findOneById(id.id);
  }

  @Mutation(() => Classes)
  async update(@Args('updateClassesInput') updateClassesInput: UpdateClassesInput) {
    return this.classesService.update(updateClassesInput.id, updateClassesInput);
  }

 @Mutation(() => Boolean)
  async remove(@Args('id') id: string) {
    return this.classesService.remove(id);
  }
}



// @Mutation(() => Boolean)
// async removeUser(@Args('id', { type: () => String }) id: string)   {
//   const result = await this.usersService.remove(id);
//   return result.affected > 0;
// }