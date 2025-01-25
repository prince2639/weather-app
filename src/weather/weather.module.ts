import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { CitiesModule } from '../cities/cities.module';
import { OpenWeatherService } from '../shared/open-weather.service';

@Module({
  imports: [CitiesModule],
  controllers: [WeatherController],
  providers: [WeatherService, OpenWeatherService],
})
export class WeatherModule {}
