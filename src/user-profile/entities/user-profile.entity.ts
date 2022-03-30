import { ObjectType, Field } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class UserProfile {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column({ nullable: true })
  city: string;

  @Field()
  @Column({ nullable: true })
  state: string;

  @Field()
  @Column({ nullable: true })
  address: string;

  @Field()
  @Column({ nullable: true })
  phno: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
