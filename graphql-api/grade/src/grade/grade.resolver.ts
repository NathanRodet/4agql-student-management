import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GradeService } from './grade.service';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';

@Resolver('Grade')
export class GradeResolver {
  constructor(private readonly gradeService: GradeService) {}

  @Mutation('createGrade')
  create(@Args('createGradeInput') createGradeInput: CreateGradeInput) {
    return this.gradeService.create(createGradeInput);
  }

  @Query('grade')
  findAll() {
    return this.gradeService.findAll();
  }

  @Query('grade')
  findOne(@Args('id') id: number) {
    return this.gradeService.findOne(id);
  }

  @Mutation('updateGrade')
  update(@Args('updateGradeInput') updateGradeInput: UpdateGradeInput) {
    return this.gradeService.update(updateGradeInput.id, updateGradeInput);
  }

  @Mutation('removeGrade')
  remove(@Args('id') id: number) {
    return this.gradeService.remove(id);
  }
}
