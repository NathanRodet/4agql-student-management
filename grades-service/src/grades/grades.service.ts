import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Grade } from './entities/grade.entity';
import { CreateGradeInput } from './dto/create-grade.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateGradesInput } from './dto/update-grade.input';
@Injectable()
export class GradesService {
  constructor(
    @InjectRepository(Grade)
    private gradesRepository: Repository<Grade>,
  ) { }

  async create(createGradeInput: CreateGradeInput) {
    const gradeData = {
        classe_id: createGradeInput.classe_id,
        professor_id: createGradeInput.professor_id,
        note: createGradeInput.grade,
        student_id: createGradeInput.student_id,
    }
    return await this.gradesRepository.save(this.gradesRepository.create(gradeData));
  }

  async findAllNote(student_id: string) {
    return await this.gradesRepository.find();
  
} 
  async findOneById(id: string) {
    const grade = await this.gradesRepository.findOneBy({ id });
    if (!grade)
      throw new HttpException({ message: 'Grade not found.' }, HttpStatus.NOT_FOUND);
    else
      return grade;
  }

  // async findOneByStudentId(student_id: string) {
  //   const grade = await this.gradesRepository.findOneBy({ student_id });
  //   if (!grade)
  //     throw new HttpException({ message: 'Grade not found.' }, HttpStatus.NOT_FOUND);
  //   else
  //     return grade;
  // }

  async update(id: string, updateGradeInput: UpdateGradesInput) {
    const grade = await this.gradesRepository.findOneBy({ id: updateGradeInput.id });
    if (!grade)
      throw new HttpException({ message: 'Grade not found.' }, HttpStatus.NOT_FOUND);
    else {
      const gradeData = {
        note: updateGradeInput.note,
      }
      await this.gradesRepository.update({ id: updateGradeInput.id }, gradeData);
      return this.gradesRepository.findOneBy({ id: updateGradeInput.id });
    }
  }
  
  async remove(id: string) {
    const grade = await this.gradesRepository.findOneBy({ id });
    if (!grade)
      throw new HttpException({ message: 'Grade not found.' }, HttpStatus.NOT_FOUND);
    else
      return await this.gradesRepository.delete({ id });
  }
}
