// src/weather/city.schema.ts

import { Schema, Document } from 'mongoose';

export interface City extends Document {
  name: string;
  country: string;
}

export const CitySchema = new Schema<City>({
  name: { type: String, required: true },
  country: { type: String, required: true },
});
