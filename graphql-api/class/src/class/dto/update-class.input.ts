import { IsNotEmpty, IsUUID } from 'class-validator';
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateClassInput } from './create-class.input';

@InputType()
export class UpdateClassInput extends PartialType(CreateClassInput) {

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
