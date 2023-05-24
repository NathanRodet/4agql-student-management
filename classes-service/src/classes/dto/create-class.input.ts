import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString, Length, isString } from 'class-validator';

@InputType()
export class CreateClassesInput {

  @Field(() => String, { description: 'name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  name: string;

  @Field(() => String, { description: 'professeur_Id field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  professeur_Id: string;

  @Field(() => String, { description: 'list eleve field' })
  listEleves: string[];

  @Field(() => String, { description: 'Capaciter field' })
  @IsNotEmpty()
  capaciter: number;
}
