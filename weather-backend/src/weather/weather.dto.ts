import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsOptional, IsNotEmpty } from 'class-validator';

export class CityDto {
  @ApiProperty({
    description: 'The name of the city',
  })
  @IsString()
  name!: string; 

  @ApiProperty({
    description: 'The country code for the city',
  })
  @IsString()
  country!: string; 

  constructor(name: string, country: string) {
    this.name = name;
    this.country = country;
  }
}

export class WeatherResponseDto {
  @ApiProperty()
  name!: string; 

  @ApiProperty()
  country!: string; 

  @ApiProperty()
  main!: {
    temp: number;
    humidity: number;
  };

  @ApiProperty()
  weather!: [
    {
      description: string;
      icon: string;
    },
  ];

  constructor(
    name: string,
    country: string,
    temp: number,
    humidity: number,
    description: string,
    icon: string,
  ) {
    this.name = name;
    this.country = country;
    this.main = {
      temp,
      humidity,
    };
    this.weather = [
      {
        description,
        icon,
      },
    ];
  }
}

export class CreateCityDto {
  @ApiProperty({
    description: 'The name of the city',
  })
  @IsString()
  name!: string; 

  @ApiProperty({
    description: 'The country code of the city',
  })
  @IsString()
  country!: string; 

  constructor(name: string, country: string) {
    this.name = name;
    this.country = country;
  }
}
