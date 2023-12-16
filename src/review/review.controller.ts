import { Controller, Get, Post, Request } from '@nestjs/common';
import { Review } from 'src/review/review.schema';
import { ReviewService } from 'src/review/review.service';
import { IReview } from 'src/review/review.types';

@Controller('review')
export class ReviewController {
  public constructor(private readonly reviewService: ReviewService) {}

  @Get()
  public getAll(): Promise<Review[]> {
    return this.reviewService.findAll();
  }

  @Post()
  public add(@Request() { body }: { body: IReview }): Promise<Review> {
    return this.reviewService.create(body);
  }
}
