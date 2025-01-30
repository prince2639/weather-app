import { Module } from '@nestjs/common';
import { WeatherModule } from './weather/weather.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', 
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://db:27017/mydb'),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
