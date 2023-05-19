import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateClassInput } from './dto/create-class.input';
import { UpdateClassInput } from './dto/update-class.input';
import { Class } from './entities/class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassService {

  constructor(
    @InjectRepository(Class)
    private ClassRepository: Repository<Class>,
  ) { }
  async create(createClassInput: CreateClassInput) {
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
      throw new HttpException({ message: 'Class not found.' }, HttpStatus.NOT_FOUND);
    else
      return classs;
  }

  async update(id: string, updateClassInput: UpdateClassInput) {
    const classs = await this.ClassRepository.findOneBy({ id: updateClassInput.id });
    if (!classs)
      throw new HttpException({ message: 'Class not found.' }, HttpStatus.NOT_FOUND);
    else {
      const classData = {
        listEleves: updateClassInput.listEleves,
        capaciter: updateClassInput.capaciter,
      }
      await this.ClassRepository.update({ id: updateClassInput.id }, classData);
      return this.ClassRepository.findOneBy({ id: updateClassInput.id });
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
