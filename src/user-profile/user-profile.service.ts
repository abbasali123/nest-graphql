import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserProfileInput } from './dto/create-user-profile.input';
import { UpdateUserProfileInput } from './dto/update-user-profile.input';
import { UserProfile } from './entities/user-profile.entity';

@Injectable()
export class UserProfileService {
  constructor(
    @InjectRepository(UserProfile)
    private userProfileRepository: Repository<UserProfile>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserProfileInput: CreateUserProfileInput) {
    if (!createUserProfileInput.userId) {
      throw new Error('User Id is missing');
    }
    const userProfile = this.userProfileRepository.create(
      createUserProfileInput,
    );

    const savedProfile = await this.userProfileRepository.save(userProfile);

    this.userRepository.save({
      id: createUserProfileInput.userId,
      profile: savedProfile,
    });

    return savedProfile;
  }

  findAll() {
    return this.userProfileRepository.find({ relations: ['user'] });
  }

  findOne(id: string) {
    return this.userProfileRepository.findOne({ id }, { relations: ['user'] });
  }

  update(id: string, updateUserProfileInput: UpdateUserProfileInput) {
    return this.userProfileRepository.save({
      id,
      ...updateUserProfileInput,
    });
  }

  remove(id: string) {
    return this.userProfileRepository.delete(id);
  }
}
