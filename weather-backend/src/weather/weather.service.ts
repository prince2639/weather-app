// src/weather/weather.service.ts

import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { CityDto, WeatherResponseDto } from './weather.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { City } from './city.schema';

@Injectable()
export class WeatherService {
  constructor(
    private configService: ConfigService,
    @InjectModel('City') private cityModel: Model<City>,
  ) {}

  async getWeather(cityName: string): Promise<WeatherResponseDto> {
    const apiKey = this.configService.get('OPENWEATHER_API_KEY');
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    );
    return this.formatWeatherResponse(response.data);
  }

  async getAllWeather(): Promise<WeatherResponseDto[]> {
    const cities = await this.cityModel.find().exec();
    const weatherData: WeatherResponseDto[] = [];
    for (const city of cities) {
      const weather = await this.getWeather(city.name);
      weatherData.push(weather);
    }
    return weatherData;
  }

  async addCity(createCityDto: CityDto): Promise<CityDto> {
    const newCity = new this.cityModel(createCityDto);
    await newCity.save();
    return createCityDto;
  }

  private formatWeatherResponse(data: any): WeatherResponseDto {
    return {
      name: data.name,
      country: data.sys.country,
      main: {
        temp: data.main.temp,
        humidity: data.main.humidity,
      },
      weather: [
        {
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        },
      ],
    };
  }
}
