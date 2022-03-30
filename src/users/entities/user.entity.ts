import { ObjectType, Field } from '@nestjs/graphql';
import { Community } from 'src/communities/entities/community.entity';
import { Task } from 'src/task/entities/task.entity';
import { UserProfile } from 'src/user-profile/entities/user-profile.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column()
  password: string;

  @OneToMany(() => Task, (task) => task.user)
  tasks: Task[];

  @OneToOne(() => UserProfile)
  @JoinColumn()
  profile: UserProfile;

  @ManyToMany(() => Community, (community) => community.users, {
    cascade: true,
  })
  @JoinTable()
  communities: Community[];
}
