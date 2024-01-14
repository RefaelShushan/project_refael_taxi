import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TravelModule } from './travel/travel.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TravelModule, UsersModule,MongooseModule.forRoot('mongodb://localhost:27017/dbTravel')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
