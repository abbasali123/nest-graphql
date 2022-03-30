import { Module } from '@nestjs/common';
import { UserProfileService } from './user-profile.service';
import { UserProfileResolver } from './user-profile.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserProfile } from './entities/user-profile.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserProfile]),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [UserProfileResolver, UserProfileService],
})
export class UserProfileModule {}
