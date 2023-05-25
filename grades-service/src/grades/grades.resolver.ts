import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GradesService } from './grades.service';
import { CreateGradeInput } from './dto/create-grade.input';
import { Grade } from './entities/grade.entity';
import { UpdateGradesInput } from './dto/update-grade.input';

@Resolver('Grade')
export class GradesResolver {
  constructor(private readonly gradesService: GradesService) {}

  @Mutation(() => Grade)
  create(@Args('createGradeInput') createGradeInput: CreateGradeInput) {
    return this.gradesService.create(createGradeInput);
  }

  @Query(() => [Grade], { name: 'allgradesStudent' })
  async findAllNoteStudent(@Args('id') student_id: string) {
    return this.gradesService.findAllNote(student_id);
  }
  @Query(() => Grade, { name: 'grade' })
  findOne(@Args('id') id: string) {
    return this.gradesService.findOneById(id);
  }

  @Mutation(() => Grade)
  update(@Args('updateGradeInput') updateGradeInput: UpdateGradesInput) {
    return this.gradesService.update(updateGradeInput.id, updateGradeInput);
  }

  @Mutation(() => Boolean)
  remove(@Args('id') id: string) {
    return this.gradesService.remove(id);
  }
}
