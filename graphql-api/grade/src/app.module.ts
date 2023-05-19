import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GradeModule } from './grade/grade.module';

@Module({
  imports: [GradeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
