import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from 'src/review/review.schema';
import { CreateReviewDto } from 'src/review/review.dto';

@Injectable()
export class ReviewService {
  public constructor(
    @InjectModel(Review.name) private reviewModel: Model<Review>,
  ) {}

  public async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const createdReview = new this.reviewModel(createReviewDto);
    return await createdReview.save();
  }

  public async findAll(): Promise<Review[]> {
    return await this.reviewModel.find().exec();
  }

  public async findByCourseId(courseId: string): Promise<Review[]> {
    return await this.reviewModel.find({ courseId: { $eq: courseId } }).exec();
  }
}
