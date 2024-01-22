import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Travel } from './travel.schema';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class TravelService {
  constructor(@InjectModel(Travel.name) private travelModel: Model<Travel>) {}

  async create(createTravelDto: CreateTravelDto): Promise<Travel> {
    const createdTravel = new this.travelModel(createTravelDto);
    return createdTravel.save();
  }

  async findAll():Promise<Travel[]> {
    return await this.travelModel.find();
    
  }

  async findOne(id: string) {
    return await this.travelModel.findById(id);
  }

  async update(id: string, updateTravelDto: UpdateTravelDto): Promise<Travel> {
    const travel = await this.travelModel.findByIdAndUpdate(id, updateTravelDto, { new: true });

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }
    return travel;
  }
  async remove(id: string) {
    const travel = await this.travelModel.findByIdAndDelete(id);

    // if (!cat) {
    //   throw new NotFoundException(`Cat with id ${id} not found`);
    // }

    return travel;
  }
}
