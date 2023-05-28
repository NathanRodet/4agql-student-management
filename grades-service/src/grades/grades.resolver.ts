import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GradesService } from './grades.service';
import { CreateGradeInput } from './dto/create-grade.input';
import { Grade } from './entities/grade.entity';
import { UpdateGradesInput } from './dto/update-grade.input';
import { Role } from 'src/auth/guards/auth.enum';
import { Roles } from 'src/auth/guards/auth.decorator';

@Resolver('Grade')
export class GradesResolver {
  constructor(private readonly gradesService: GradesService) {}

  @Roles(Role.professor)
  @Mutation(() => Grade)
  create(@Args('createGradeInput') createGradeInput: CreateGradeInput) {
    return this.gradesService.create(createGradeInput);
  }


  @Roles(Role.professor, Role.student)
  @Query(() => [Grade], { name: 'allgradesStudent' })
  async findAllNoteStudent(@Args('id') student_id: string) {
    return this.gradesService.findAllNote(student_id);
  }

  @Roles(Role.professor, Role.student)
  @Query(() => Grade, { name: 'grade' })
  findOne(@Args('id') id: string) {
    return this.gradesService.findOneById(id);
  }

  @Roles(Role.professor)
  @Mutation(() => Grade)
  update(@Args('updateGradeInput') updateGradeInput: UpdateGradesInput) {
    return this.gradesService.update(updateGradeInput.id, updateGradeInput);
  }

  @Roles(Role.professor)
  @Mutation(() => Boolean)
  remove(@Args('id') id: string) {
    return this.gradesService.remove(id);
  }
}
