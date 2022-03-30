import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserProfileInput {
  @Field({ nullable: true })
  id: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  phno: string;

  @Field()
  userId: string;
}
