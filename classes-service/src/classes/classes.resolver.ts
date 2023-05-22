import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassesService } from './classes.service';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';

@Resolver('Class')
export class ClassesResolver {
  constructor(private readonly classesService: ClassesService) {}

  @Mutation('createClass')
  create(@Args('createClassInput') createClassInput: CreateClassInput) {
    return this.classesService.create(createClassInput);
  }

  @Query('classes')
  findAll() {
    return this.classesService.findAll();
  }

  @Query('class')
  findOne(@Args('id') id: number) {
    return this.classesService.findOne(id);
  }

  @Mutation('updateClass')
  update(@Args('updateClassInput') updateClassInput: UpdateClassInput) {
    return this.classesService.update(updateClassInput.id, updateClassInput);
  }

  @Mutation('removeClass')
  remove(@Args('id') id: number) {
    return this.classesService.remove(id);
  }
}
