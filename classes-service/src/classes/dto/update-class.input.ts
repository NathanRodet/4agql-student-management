import { IsNotEmpty, IsUUID } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateClassesInput } from './create-class.input';

@InputType()
export class UpdateClassesInput extends PartialType(CreateClassesInput) {

  @Field(() => String, { description: 'Password field' })
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @Field(() => String, { description: 'listEleves field' })
  listEleves: string[];

  @Field(() => Number, { description: 'capaciter field' })
  @IsNotEmpty()
  capaciter: number;

}
