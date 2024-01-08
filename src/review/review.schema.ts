import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({ required: true })
  owner: string;
  @Prop({ required: true })
  revocation: string;
  @Prop({ required: true })
  rating: number;
  @Prop({ required: true })
  courseId: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
