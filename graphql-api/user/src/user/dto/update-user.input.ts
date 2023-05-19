import { IsNotEmpty, IsStrongPassword, IsUUID } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  password: string;

}
