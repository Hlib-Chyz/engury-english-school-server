import { Controller, Get } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  public constructor(private readonly mailService: MailService) {}

  @Get()
  public sendRevocationConfirmation(): Promise<void> {
    return this.mailService.sendRevocationConfirmation();
  }
}
