import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradesService } from './grades.service';
import { Grade } from './entities/grade.entity';
import { GradesResolver } from './grades.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Grade])],
  providers: [GradesResolver, GradesService]
})
export class GradesModule { }