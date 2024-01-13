import { Test, TestingModule } from '@nestjs/testing';
import { MailService } from 'src/mail/mail.service';
import { ConfigService } from '@nestjs/config';
import { IReview } from 'src/review/review.types';
import { MailerService } from '@nestjs-modules/mailer';

jest.mock('@nestjs/config');
jest.mock('@nestjs-modules/mailer');

describe('MailService', () => {
  let mailService: MailService;
  let mailerService: MailerService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailService, ConfigService, MailerService],
    }).compile();

    mailService = module.get<MailService>(MailService);
    mailerService = module.get<MailerService>(MailerService);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('sendRevocationConfirmation', () => {
    it('should send letter to mail', async () => {
      const review: IReview = {
        _id: 'id',
        owner: 'owner',
        revocation: 'revocation',
        rating: 4,
        courseId: 'courseId',
      };
      const mailFrom = 'asdasd@asdasd.ua';
      jest.spyOn(configService, 'get').mockResolvedValue(mailFrom as never);
      await mailService.sendRevocationConfirmation(review);
      expect(mailerService.sendMail).toHaveBeenCalledTimes(1);
      expect(mailerService.sendMail).toHaveBeenCalledWith({
        from: mailFrom,
        to: mailFrom,
        subject: 'Welcome! Confirm Revocation',
        template: './revocation-confirmation',
        context: {
          url: 'http://localhost:3001/review',
          revocation: review.revocation,
          revocationOwner: review.owner,
          rating: review.rating,
          courseId: review.courseId,
        },
      });
    });
  });
});
