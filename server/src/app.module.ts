import { Module } from '@nestjs/common';
import { TravelModule } from './travel/travel.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { RedisOptions } from './redis-connect';

@Module({
  imports: [TravelModule, UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/dbTravel'),
  ConfigModule.forRoot({ isGlobal: true }),
  CacheModule.registerAsync(RedisOptions),],
})
export class AppModule {}
