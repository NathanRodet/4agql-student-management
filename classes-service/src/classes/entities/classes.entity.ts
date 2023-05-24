import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@ObjectType()
@Entity()
export class Classes {
  @Field(() => String, { description: 'UUID field' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { description: 'name field' })
  @Column({ unique: false, nullable: false })
  name: string;

  @Field(() => String, { description: 'professeur id field' })
  @Column({ unique: true, nullable: false })
  professeur_Id: string;

  @Field(() => [String], { description: 'list eleve field' })
  @Column("simple-array", { nullable: true })
  listEleves: string[];

  @Field(() => Number, { description: 'capaciter field' })
  @Column({ unique: false, nullable: false })
  capaciter: number;
}
