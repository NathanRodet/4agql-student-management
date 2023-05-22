import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length } from 'class-validator';

@InputType()
export class CreateGradeInput {

  @Field(() => String, { description: 'course_id name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  course_id: string;

  @Field(() => String, { description: 'professor_id field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  professor_id: string;

  @Field(() => Number, { description: 'note field' })
  @IsNotEmpty()
  note: number;
}
