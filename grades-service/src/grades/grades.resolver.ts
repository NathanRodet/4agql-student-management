import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GradesService } from './grades.service';
import { CreateGradeInput } from './dto/create-grade.input';
import { UpdateGradeInput } from './dto/update-grade.input';

@Resolver('Grade')
export class GradesResolver {
  constructor(private readonly gradesService: GradesService) {}

  @Mutation('createGrade')
  create(@Args('createGradeInput') createGradeInput: CreateGradeInput) {
    return this.gradesService.create(createGradeInput);
  }

  @Query('grades')
  findAll() {
    return this.gradesService.findAll();
  }

  @Query('grade')
  findOne(@Args('id') id: number) {
    return this.gradesService.findOne(id);
  }

  @Mutation('updateGrade')
  update(@Args('updateGradeInput') updateGradeInput: UpdateGradeInput) {
    return this.gradesService.update(updateGradeInput.id, updateGradeInput);
  }

  @Mutation('removeGrade')
  remove(@Args('id') id: number) {
    return this.gradesService.remove(id);
  }
}
