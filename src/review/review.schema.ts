import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({ required: true })
  public owner: string;
  @Prop({ required: true })
  public revocation: string;
  @Prop({ required: true })
  public rating: number;
  @Prop({ required: true })
  public courseId: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
