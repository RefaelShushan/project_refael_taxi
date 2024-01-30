import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TravelService } from './travel.service';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Put, UseInterceptors } from '@nestjs/common/decorators';

@Controller('travel')
@UseInterceptors(CacheInterceptor)
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Post()
  create(@Body() createTravelDto: CreateTravelDto) {
    return this.travelService.create(createTravelDto);
  }

  @Get()
  findAll() {
    return this.travelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.travelService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTravelDto: UpdateTravelDto) {
    return this.travelService.update(id, updateTravelDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    // await this.travelService.remove(id);
    return await this.travelService.remove(id);
  }
}
