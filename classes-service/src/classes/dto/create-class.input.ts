import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length, isString } from 'class-validator';

@InputType()
export class CreateClassesInput {

  @Field(() => String, { description: 'name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  name: string;

  @Field(() => String, { description: 'professor id field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  professeur_Id: string;

  @Field(() => [String], { description: 'student list field' })
  listEleves: string[];

  @Field(() => String, { description: 'capacity field' })
  @IsNotEmpty()
  capaciter: number;
}
