import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class City extends Document {
  @Prop({ required: true })
  name!: string;
}

export const CitySchema = SchemaFactory.createForClass(City);
