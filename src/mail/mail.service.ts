import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IReview } from 'src/review/review.types';

@Injectable()
export class MailService {
  public constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  public async sendRevocationConfirmation(review: IReview): Promise<void> {
    return await this.mailerService.sendMail({
      from: this.configService.get('MAIL_FROM'),
      to: this.configService.get('MAIL_FROM'),
      subject: 'Welcome! Confirm Revocation',
      template: './revocation-confirmation',
      context: {
        url: 'http://localhost:3000/review',
        revocation: review.revocation,
        revocationOwner: review.owner,
        rating: review.rating,
      },
    });
  }
}
