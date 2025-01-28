import { Controller, Get, Param, Post, Body, UseGuards } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherResponseDto, CreateCityDto } from './weather.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBasicAuth } from '@nestjs/swagger';
import { BasicAuthGuard } from '../auth/basic-auth.guard';

@ApiTags('Weather')
// @ApiBasicAuth('basic-auth')
@Controller('/api/weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('all')
  @ApiOperation({ summary: 'Get weather for all cities' })
  @ApiResponse({
    status: 200,
    description: 'Returns weather data for all cities',
    type: [WeatherResponseDto],
  })
  async getAllWeather(): Promise<WeatherResponseDto[]> {
    return this.weatherService.getAllWeather();
  }

  @Get('/:cityName')
  @ApiOperation({ summary: 'Get weather for a specific city' })
  @ApiResponse({
    status: 200,
    description: 'Returns weather data for a specific city',
    type: WeatherResponseDto,
  })
  async getWeather(
    @Param('cityName') cityName: string,
  ): Promise<WeatherResponseDto> {
    return this.weatherService.getWeather(cityName);
  }

  @ApiBasicAuth('basic-auth')
  @Post('add-city')
  @UseGuards(BasicAuthGuard)
  @ApiOperation({ summary: 'Add a city for weather tracking' })
  @ApiResponse({
    status: 201,
    description: 'City added successfully',
    type: CreateCityDto,
  })
  async addCity(@Body() createCityDto: CreateCityDto): Promise<CreateCityDto> {
    return this.weatherService.addCity(createCityDto);
  }
}
