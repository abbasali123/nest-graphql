import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AddUserInput } from './dto/add-user.input';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';
import { Community } from './entities/community.entity';

@Injectable()
export class CommunitiesService {
  constructor(
    @InjectRepository(Community)
    private communityRepository: Repository<Community>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createCommunityInput: CreateCommunityInput) {
    const newCommunity = this.communityRepository.create(createCommunityInput);

    return this.communityRepository.save(newCommunity);
  }

  findAll() {
    return this.communityRepository.find({ relations: ['users'] });
  }

  findOne(id: string) {
    return this.communityRepository.findOne(
      { id },
      {
        relations: ['users'],
      },
    );
  }

  update(id: string, updateCommunityInput: UpdateCommunityInput) {
    return this.communityRepository.save({
      id,
      ...updateCommunityInput,
    });
  }

  remove(id: string) {
    return this.communityRepository.delete(id);
  }

  async addUserToCommunity(addUserInput: AddUserInput) {
    const community = await this.findOne(addUserInput.communityId);

    const userInfo = await this.userRepository.findOne(
      {
        id: addUserInput.userId,
      },
      {
        relations: ['communities'],
      },
    );

    console.log('community', community, userInfo);

    // if (userInfo.communities?.length) {
    //   userInfo.communities.push(community);

    //   this.userRepository.save({
    //     id: addUserInput.userId,
    //     communities: userInfo.communities,
    //   });
    // } else {
    //   this.userRepository.save({
    //     id: addUserInput.userId,
    //     communities: [community],
    //   });
    // }

    return community;
  }
}
