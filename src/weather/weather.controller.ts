// src/weather/weather.controller.ts
import { Controller, Get, Param, UseGuards, Post, Body } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { CityService } from '../city/city.service';
import { AuthGuard } from '../auth/auth.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get weather for all cities' })
  async getAllWeather() {
    const cities = await this.cityService.findAll();
    return this.weatherService.getAllWeather(cities.map((city) => city.name));
  }

  @Get(':cityName')
  @ApiOperation({ summary: 'Get weather for a specific city' })
  async getWeather(@Param('cityName') cityName: string) {
    return this.weatherService.getWeather(cityName);
  }
}

@ApiTags('Admin')
@Controller('admin')
export class AdminController {
  constructor(private cityService: CityService) {}

  @UseGuards(AuthGuard)
  @Post('add-city')
  @ApiOperation({ summary: 'Add a city to the database' })
  async addCity(@Body() cityDto: { name: string }) {
    return this.cityService.create(cityDto);
  }
}
