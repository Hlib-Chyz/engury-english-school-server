import { Test, TestingModule } from '@nestjs/testing';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewModule } from 'src/review/review.module';
import { ReviewController } from 'src/review/review.controller';
import { ReviewService } from 'src/review/review.service';

describe('ReviewModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost/test', {}),
        ReviewModule,
      ],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should import ReviewModule', () => {
    const reviewModule = module.get(ReviewModule);
    expect(reviewModule).toBeDefined();
  });

  it('should import ReviewController', () => {
    const reviewController = module.get(ReviewController);
    expect(reviewController).toBeDefined();
  });

  it('should import ReviewService', () => {
    const reviewService = module.get(ReviewService);
    expect(reviewService).toBeDefined();
  });

  afterAll(async () => {
    await module.close();
  });
});
