import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
// import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    // const user = {
    //   ...createUserInput,
    //   id: this.users.length++,
    // };

    const newUser = this.userRepository.create(createUserInput);

    return this.userRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['tasks', 'profile', 'communities'],
    });
  }

  findOne(id: string) {
    return this.userRepository.findOne(
      { id },
      {
        relations: ['tasks', 'profile', 'communities'],
      },
    );
  }

  findByUsername(username: string) {
    return this.userRepository.findOne(
      { username },
      {
        relations: ['tasks', 'profile', 'communities'],
      },
    );
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
