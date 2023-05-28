import { ObjectType, Field, Directive } from '@nestjs/graphql';
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
  @Column({ unique: false, nullable: false })
  professeur_Id: string;

  @Field(() => [User], { description: 'list eleve field' })
  @Directive('@external')
  @Directive('@requires(fields: "id")')
  @Column("simple-array", { nullable: true })
  listEleves: User[];

  @Field(() => Number, { description: 'capaciter field' })
  @Column({ unique: false, nullable: false })
  capaciter: number;
}
