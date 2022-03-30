import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCommunityInput {
  @Field()
  name: string;
}
