import { Inject, Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Travel } from './travel.schema';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Cache } from 'cache-manager';

@Injectable()
export class TravelService {
  constructor(
    @InjectModel(Travel.name) private travelModel: Model<Travel>,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}

  async create(createTravelDto: CreateTravelDto): Promise<Travel> {
    const createdTravel = new this.travelModel(createTravelDto);
    await this.cacheManager.reset();
    return createdTravel.save();
  }

  async findAll(): Promise<Travel[]> {
    return await this.travelModel.find();
  }

  async findOne(id: string) {
    try {
      if (!id) {
        return { error: `Resource with id: ${id} not found`, status: 404 };
      }
      return await this.travelModel.findById(id);
    } catch {
      return `id not found`;
    }
  }

  async update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel> {
    await this.cacheManager.reset();
    const travel = await this.travelModel.findByIdAndUpdate(
      id,
      updateTravelDto,
      { new: true },
    );

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }
    return travel;
  }

  async remove(id: string) {
    try {
      const travel = await this.travelModel.findByIdAndDelete(id);
      if (!travel) {
        return `${id} not found`;
      }
      await this.cacheManager.reset();
      return `delete  travel with id:${id} Successfully`;
    } catch {
      return `id:${id} not found`;
    }
  }
}
