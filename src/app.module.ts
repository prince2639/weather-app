import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CitiesModule } from './cities/cities.module';
// import { CityService } from './city/city.service';
// import { CityModule } from './city/city.module';
// import { CitiesModule } from './cities/cities.module';
import { WeatherController } from './weather/weather.controller';
import { WeatherService } from './weather/weather.service';

@Module({
  imports: [CitiesModule],
  controllers: [AppController, WeatherController],
  providers: [AppService, WeatherService],
})
export class AppModule {}
