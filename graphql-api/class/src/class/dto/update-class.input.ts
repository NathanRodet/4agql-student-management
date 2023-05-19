import { CreateClassInput } from './create-class.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateClassInput extends PartialType(CreateClassInput) {
  id: number;
}
