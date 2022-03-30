import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field()
  taskName: string;

  @Field()
  status: string;

  @Field()
  userId: string;
}
