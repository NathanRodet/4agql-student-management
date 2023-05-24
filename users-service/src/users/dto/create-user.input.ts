import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword, Length } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field(() => String, { description: 'First name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  firsName: string;

  @Field(() => String, { description: 'Last name field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  lastName: string;

  @Field(() => String, { description: 'Pseudo field' })
  @IsNotEmpty()
  @IsString()
  @Length(3, 25)
  pseudo: string;

  @Field(() => String, { description: 'Email field' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  password: string;
}
