import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  public constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  public async sendRevocationConfirmation(): Promise<void> {
    const url = 'confirmUrl';
    const revocation = 'I like it';
    return await this.mailerService.sendMail({
      from: this.configService.get('MAIL_FROM'),
      to: this.configService.get('MAIL_TO'),
      subject: 'Welcome! Confirm Revocation',
      template: './revocation-confirmation',
      context: {
        url,
        revocation,
      },
    });
  }
}
