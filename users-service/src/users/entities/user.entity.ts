import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => String, { description: 'UUID field' })
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field(() => String, { description: 'first_name field' })
  @Column({ unique: false, nullable: false })
  first_name: string;

  @Field(() => String, { description: 'last_name field' })
  @Column({ unique: false, nullable: false })
  last_name: string;

  @Field(() => String, { description: 'pseudo field' })
  @Column({ unique: true, nullable: false })
  pseudo: string;

  @Field(() => String, { description: 'email field' })
  @Column({ unique: true, nullable: false })
  email: string;

  @Field(() => String, { description: 'password field' })
  @Column({ nullable: false, select: true })
  password: string;

  @Field(() => String, { description: 'role field' })
  @Column({ default: "student" })
  role: string;
}
