import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddUserInput {
  @Field()
  userId: string;

  @Field()
  communityId: string;
}
