// src/city/city.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './schemas/city.schema';

@Injectable()
export class CityService {
  constructor(@InjectModel(City.name) private cityModel: Model<City>) {}

  async create(createCityDto: { name: string }) {
    const city = new this.cityModel(createCityDto);
    return city.save();
  }

  async findAll() {
    return this.cityModel.find().exec();
  }
}
