import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
// import { LoginUserInput } from './dto/log in-user.input';
import { JwtService } from '@nestjs/jwt';
import { LoginUserInput } from './dto/login-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    const validPassword = await bcrypt.compare(password, user?.password);

    if (user && validPassword) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: User) {
    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
      }),
      user,
    };
  }

  async signup(loginUserInput: LoginUserInput) {
    console.log('hello', 123);
    const user = await this.usersService.findByUsername(
      loginUserInput.username,
    );
    console.log('hello', user, loginUserInput.username);
    if (user) {
      throw new Error('User already exists!');
    }

    return this.usersService.create({
      ...loginUserInput,
    });
  }
}
