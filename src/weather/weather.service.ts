import { Injectable } from '@nestjs/common';
import { CitiesService } from '../cities/cities.service';
import { OpenWeatherService } from '../shared/open-weather.service';

@Injectable()
export class WeatherService {
  constructor(
    private readonly citiesService: CitiesService,
    private readonly openWeatherService: OpenWeatherService,
  ) {}

  async getWeatherForCities() {
    const cities = await this.citiesService.findAll();
    const weatherData = await Promise.all(
      cities.map(async (city) => {
        return {
          city: city.name,
          weather: await this.openWeatherService.getWeather(city.name),
        };
      }),
    );
    return weatherData;
  }
}
