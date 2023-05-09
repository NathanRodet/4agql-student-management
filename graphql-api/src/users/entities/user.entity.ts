import { ObjectType, Field } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
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

  @Field(() => String, { description: 'email field' })
  @Column({ unique: true, nullable: false })
  email: string;

  @Field(() => String, { description: 'password field' })
  @Column({ nullable: false, select: false })
  password: string;

  @Field(() => String, { description: 'role field' })
  @Column({ default: false })
  role: boolean;
}
