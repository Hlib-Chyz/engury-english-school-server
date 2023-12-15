import { Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  public constructor(private readonly mailService: MailService) {}

  @Post('send-revocation-confirmation')
  public sendRevocationConfirmation(): Promise<void> {
    return this.mailService.sendRevocationConfirmation();
  }
}
