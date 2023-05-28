import { IsNotEmpty, IsStrongPassword, IsUUID } from 'class-validator';
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  password?: string;

  @Field(() => String, { description: 'Role field' })
  @IsNotEmpty()
  role?: string;

}
