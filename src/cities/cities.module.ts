import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City, CitySchema } from './cities.schema';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: City.name, schema: CitySchema }]),
    AuthModule, // Import AuthModule
  ],
  controllers: [CitiesController],
  providers: [CitiesService],
})
export class CitiesModule {}
