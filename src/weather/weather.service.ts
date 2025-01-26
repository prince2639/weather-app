import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    },
  ];
}

@Injectable()
export class WeatherService {
  constructor(private configService: ConfigService) {}

  async getWeather(cityName: string) {
    const apiKey = this.configService.get('OPENWEATHER_API_KEY');
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`,
    );
    return response.data;
  }

  async getAllWeather(cities: string[]) {
    const weatherData = [];
    for (const city of cities) {
      const weather = await this.getWeather(city);
      weatherData.push(weather);
    }
    return weatherData;
  }
}
