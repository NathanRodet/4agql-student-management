import { Resolver, Args, Mutation, Query } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { AuthType } from './dto/auth.type';
import { LoginInput } from './dto/login.input';

@Resolver(() => AuthType)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => AuthType)
  async login(@Args('loginInput') loginInput: LoginInput) {
    const user = await this.authService.validateUser(loginInput.email, loginInput.password);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    return this.authService.login(user);
  }
  @Query(() => Boolean)
  async logout(): Promise<boolean> {
    return true;
  }
}
