import { Module } from '@nestjs/common';
import { ClassesService } from './classes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Classes } from './entities/classes.entity';
import { ClassesResolver } from './classes.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Classes])],
  providers: [ClassesResolver, ClassesService]
})
export class ClassesModule { }



