import { Test, TestingModule } from '@nestjs/testing';
import { MailController } from 'src/mail/mail.controller';
import { MailService } from 'src/mail/mail.service';
import { IReview } from 'src/review/review.types';

jest.mock('src/mail/mail.service');

describe('MailController', () => {
  let controller: MailController;
  let service: MailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MailController],
      providers: [MailService],
    }).compile();

    controller = module.get<MailController>(MailController);
    service = module.get<MailService>(MailService);
  });

  describe('sendRevocationConfirmation', () => {
    it('should send revocation confirmation', () => {
      const review: IReview = {
        _id: '12',
        owner: 'f',
        revocation: 'as',
        rating: 4,
        courseId: '123',
      };
      jest
        .spyOn(service, 'sendRevocationConfirmation')
        .mockResolvedValueOnce(Promise.resolve());
      controller.sendRevocationConfirmation({
        body: review,
      });
      expect(service.sendRevocationConfirmation).toHaveBeenCalledTimes(1);
      expect(service.sendRevocationConfirmation).toHaveBeenCalledWith(review);
    });
  });
});
