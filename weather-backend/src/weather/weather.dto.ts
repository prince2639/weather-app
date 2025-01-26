import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsArray, IsOptional, IsNotEmpty } from 'class-validator';

// DTO for a single city
export class CityDto {
  @ApiProperty({
    description: 'The name of the city',
  })
  @IsString()
  name!: string; // Using definite assignment assertion

  @ApiProperty({
    description: 'The country code for the city',
  })
  @IsString()
  country!: string; // Using definite assignment assertion

  constructor(name: string, country: string) {
    this.name = name;
    this.country = country;
  }
}

// DTO for weather data response
export class WeatherResponseDto {
  @ApiProperty()
  name!: string; // Using definite assignment assertion

  @ApiProperty()
  country!: string; // Using definite assignment assertion

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

// DTO for creating a city (used in admin API)
export class CreateCityDto {
  @ApiProperty({
    description: 'The name of the city',
  })
  @IsString()
  name!: string; // Using definite assignment assertion

  @ApiProperty({
    description: 'The country code of the city',
  })
  @IsString()
  country!: string; // Using definite assignment assertion

  constructor(name: string, country: string) {
    this.name = name;
    this.country = country;
  }
}
