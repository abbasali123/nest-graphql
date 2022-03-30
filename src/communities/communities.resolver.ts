import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CommunitiesService } from './communities.service';
import { Community } from './entities/community.entity';
import { CreateCommunityInput } from './dto/create-community.input';
import { UpdateCommunityInput } from './dto/update-community.input';
import { AddUserInput } from './dto/add-user.input';

@Resolver(() => Community)
export class CommunitiesResolver {
  constructor(private readonly communitiesService: CommunitiesService) {}

  @Mutation(() => Community)
  createCommunity(
    @Args('createCommunityInput') createCommunityInput: CreateCommunityInput,
  ) {
    return this.communitiesService.create(createCommunityInput);
  }

  @Mutation(() => Community)
  addUserToCommunity(@Args('addUserInput') addUserInput: AddUserInput) {
    return this.communitiesService.addUserToCommunity(addUserInput);
  }

  @Query(() => [Community], { name: 'communities' })
  findAll() {
    return this.communitiesService.findAll();
  }

  @Query(() => Community, { name: 'community' })
  findOne(@Args('id') id: string) {
    return this.communitiesService.findOne(id);
  }

  @Mutation(() => Community)
  updateCommunity(
    @Args('updateCommunityInput') updateCommunityInput: UpdateCommunityInput,
  ) {
    return this.communitiesService.update(
      updateCommunityInput.id,
      updateCommunityInput,
    );
  }

  @Mutation(() => Community)
  removeCommunity(@Args('id') id: string) {
    return this.communitiesService.remove(id);
  }
}
