import { IsNotEmpty, IsUUID } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateGradeInput } from './create-grade.input';

@InputType()
export class UpdateGradesInput extends PartialType(CreateGradeInput) {

  @Field(() => String, { description: 'id field' })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field(() => Number, { description: 'note field' })
  @IsNotEmpty()
  note: number;

}
