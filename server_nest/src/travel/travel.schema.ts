import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Travel>;

@Schema()
export class Travel {
  @Prop()
  id: string;

  @Prop()
  date: string;

  @Prop()
  name: string;

  @Prop()
  port_address: string;

  @Prop()
  arrival_address: string;

  @Prop()
  cellphone_number: string;

  @Prop()
  amount: number;
}

export const TravelSchema = SchemaFactory.createForClass(Travel);