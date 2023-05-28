import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { IsEmail, IsJWT, IsNotEmpty, IsString, IsStrongPassword, IsUUID } from "class-validator";

@InputType()
export class LoginInput {
  @Field()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @Field()
  @IsNotEmpty()
  @IsStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  readonly password: string;
}

@ObjectType()
export class Token {
  @Field()
  @IsNotEmpty()
  @IsJWT()
  readonly token: string;
}

@ObjectType()
export class TokenStructure {
  @Field()
  @IsNotEmpty()
  @IsUUID()
  readonly id: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  readonly role: string;
}
