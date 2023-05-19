import { PartialType } from '@nestjs/graphql';
import { CreateClassInput } from './create-class.input';


export class UpdateClassInput extends PartialType(CreateClassInput) {
  id: string;
  listEleves?: string[];
  capaciter?: number;
}
