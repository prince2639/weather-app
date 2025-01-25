import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { CreateCityDto } from './dto/CreateCityDto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { BasicAuthGuard } from '../auth/basic-auth.guard';

@ApiTags('Cities')
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  @ApiOkResponse({ description: 'Get all configured cities' })
  async findAll() {
    return this.citiesService.findAll();
  }

  @Post()
  @UseGuards(BasicAuthGuard) // Apply Basic Auth guard
  @ApiCreatedResponse({ description: 'Add a new city' })
  async create(@Body() createCityDto: CreateCityDto) {
    return this.citiesService.create(createCityDto);
  }
}
