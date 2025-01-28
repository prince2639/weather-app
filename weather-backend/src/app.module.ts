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
    MongooseModule.forRoot(
      'mongodb+srv://pp275688:wCPazgKRauMMTryR@cluster0.zipfl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    WeatherModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
