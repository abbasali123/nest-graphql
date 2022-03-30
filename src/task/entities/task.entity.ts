import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class Task {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  taskName: string;

  @Field()
  @Column()
  status: string;

  @ManyToOne(() => User, (user) => user.tasks)
  @Field(() => User)
  user: User;

  @Column()
  @Field()
  userId: string;
}
