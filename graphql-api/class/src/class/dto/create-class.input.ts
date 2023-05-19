import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length } from 'class-validator';

@InputType()
export class CreateClassInput {

  @Field(() => String, { description: 'name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  name: string;

  @Field(() => String, { description: 'Last name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  professeur_Id: string;

  @Field(() => String, { description: 'Pseudo field' })
  listEleves: string[];

  @Field(() => String, { description: 'Email field' })
  @IsNotEmpty()
  @IsEmail()
  capaciter: number;

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  password: string;
}
