import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classes } from './entities/classes.entity';
import { CreateClassesInput } from './dto/create-class.input';
import { UpdateClassesInput } from './dto/update-class.input';

@Injectable()
export class ClassesService {

  constructor(
    @InjectRepository(Classes)
    private ClassRepository: Repository<Classes>,
  ) { }
  async create(createClassInput: CreateClassesInput) {
    const classs = await this.ClassRepository.findOneBy({ name: createClassInput.name });
    if (classs)
      throw new HttpException({ message: 'Class already registered.' }, HttpStatus.NOT_FOUND);
    else {
      const ClassData = {
        name: createClassInput.name,
        professeur_Id: createClassInput.professeur_Id,
        listEleves: createClassInput.listEleves,
        capaciter: createClassInput.capaciter
      }
      return await this.ClassRepository.save(this.ClassRepository.create(ClassData));
    }
  }

  async findAll() {
    return await this.ClassRepository.find();
  }

  async findOneById(id: string) {
    const classs = await this.ClassRepository.findOneBy({ id });
    if (!classs)
      throw new HttpException({ message: 'Classe not found.' }, HttpStatus.NOT_FOUND);
    else
      return classs;
  }

  async update(id: string, updateClassesInput: UpdateClassesInput) {
    const classs = await this.ClassRepository.findOneBy({ id: updateClassesInput.id });
    if (!classs)
      throw new HttpException({ message: 'Classe not found.' }, HttpStatus.NOT_FOUND);
    else {
      const classData = {
        listEleves: updateClassesInput.listEleves,
        capaciter: updateClassesInput.capaciter,
      }
      await this.ClassRepository.update({ id: updateClassesInput.id }, classData);
      return this.ClassRepository.findOneBy({ id: updateClassesInput.id });
    }
  }

  async remove(id: string) {
    const user = await this.ClassRepository.findOneBy({ id });
    if (!user)
      throw new HttpException({ message: 'Class not found.' }, HttpStatus.NOT_FOUND);
    else
      return await this.ClassRepository.delete({ id });
  }
}
