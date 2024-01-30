import { Module } from '@nestjs/common';
import { TravelService } from './travel.service';
import { TravelController } from './travel.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Travel, TravelSchema } from './travel.schema'

@Module({
  imports: [MongooseModule.forFeature([{ name: Travel.name, schema: TravelSchema }])],
  controllers: [TravelController],
  providers: [TravelService],
})
export class TravelModule {}
