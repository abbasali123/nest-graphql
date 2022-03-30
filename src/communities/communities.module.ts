import { Module } from '@nestjs/common';
import { CommunitiesService } from './communities.service';
import { CommunitiesResolver } from './communities.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Community } from './entities/community.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Community, User])],
  providers: [CommunitiesResolver, CommunitiesService],
})
export class CommunitiesModule {}
