import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Grade {
  @Field(() => String, { description: 'UUID field' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { description: 'classe_id field' })
  @Column({ unique: false, nullable: false })
  classe_id: string;

  // @Field(() => String, { description: 'professor_id field' })
  // @Column({ unique: false, nullable: false })
  // professor_id: string;

  @Field(() => Number, { description: 'note field' })
  @Column({ unique: false, nullable: false })
  note: number;

  @Field(() => String, { description: 'student_id field' })
  @Column({ unique: false, nullable: false })
  student_id: string;

}
