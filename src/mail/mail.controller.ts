import { Controller, Post, Request } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { IReview } from 'src/review/review.types';

@Controller('mail')
export class MailController {
  public constructor(private readonly mailService: MailService) {}

  @Post('send-revocation-confirmation')
  public sendRevocationConfirmation(
    @Request() { body }: { body: IReview },
  ): Promise<void> {
    return this.mailService.sendRevocationConfirmation(body);
  }
}
