import { Test, TestingModule } from '@nestjs/testing';
import { ReviewController } from 'src/review/review.controller';
import { Review } from 'src/review/review.schema';
import { ReviewService } from 'src/review/review.service';
import { IReview } from 'src/review/review.types';

jest.mock('src/review/review.service');

describe('ReviewController', () => {
  let controller: ReviewController;
  let service: ReviewService;
  const reviews: Review[] = [
    {
      owner: '123',
      revocation: 'asd',
      rating: 2,
      courseId: 'asd',
    },
    {
      owner: 'lkj',
      revocation: '123',
      rating: 3,
      courseId: 'asd',
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewController],
      providers: [ReviewService],
    }).compile();

    controller = module.get<ReviewController>(ReviewController);
    service = module.get<ReviewService>(ReviewService);
  });

  describe('getAll', () => {
    it('should get all reviews', async () => {
      jest.spyOn(service, 'findAll').mockResolvedValueOnce(reviews);
      const result = await controller.getAll();
      expect(result).toEqual(reviews);
    });
  });

  describe('getReviewByCourseId', () => {
    it('should get review by course id', async () => {
      jest.spyOn(service, 'findByCourseId').mockResolvedValueOnce(reviews);
      const result = await controller.getReviewByCourseId('asdasd');
      expect(result).toEqual(reviews);
    });
  });

  describe('add', () => {
    it('should add review', async () => {
      const review: IReview = {
        _id: 'asd',
        owner: '',
        revocation: '',
        rating: 0,
        courseId: '',
      };
      jest.spyOn(service, 'create').mockResolvedValueOnce(reviews[0]);
      const result = await controller.add({ body: review });
      expect(result).toEqual(reviews[0]);
    });
  });
});
