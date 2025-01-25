import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiTags, ApiOkResponse } from '@nestjs/swagger';

@ApiTags('Weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @ApiOkResponse({ description: 'Get weather for all configured cities' })
  async getWeather() {
    return this.weatherService.getWeatherForCities();
  }
}
