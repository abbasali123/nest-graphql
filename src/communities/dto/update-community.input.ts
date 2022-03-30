import { CreateCommunityInput } from './create-community.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCommunityInput extends PartialType(CreateCommunityInput) {
  @Field()
  id: string;

  @Field()
  name: string;
}
