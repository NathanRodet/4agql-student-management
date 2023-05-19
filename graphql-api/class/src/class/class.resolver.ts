import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClassService } from './class.service';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';

@Resolver('Class')
export class ClassResolver {
  constructor(private readonly classService: ClassService) {}

  @Mutation('createClass')
  create(@Args('createClassInput') createClassInput: CreateClassInput) {
    return this.classService.create(createClassInput);
  }

  @Query('class')
  findAll() {
    return this.classService.findAll();
  }

  @Query('class')
  findOne(@Args('id') id: string) {
    return this.classService.findOneById(id);
  }

  @Mutation('updateClass')
  update(@Args('updateClassInput') updateClassInput: UpdateClassInput) {
    return this.classService.update(updateClassInput.id, updateClassInput);
  }

  @Mutation('removeClass')
  remove(@Args('id') id: string) {
    return this.classService.remove(id);
  }
}
