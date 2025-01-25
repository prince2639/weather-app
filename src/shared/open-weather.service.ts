import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as OpenWeatherAPI from 'openweather-apis';

@Injectable()
export class OpenWeatherService {
  constructor(private readonly configService: ConfigService) {}

  async getWeather(city: string) {
    const apiKey = this.configService.get('OPENWEATHER_API_KEY');
    const ow = new OpenWeatherAPI(apiKey);
    return new Promise((resolve, reject) => {
      ow.city(city