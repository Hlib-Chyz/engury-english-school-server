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
    return await this.mailerService.sendMail({
      from: this.configService.get('MAIL_FROM'),
      to: this.configService.get('MAIL_TO'),
      subject: 'Welcome! Confirm Revocation',
      template: './revocation-confirmation',
      context: {
        url: 'confirmUrl',
        revocation:
          'Лорем іпсум долор сіт амет, консектетур адіпісцінг еліт. Нуллам ін щам вітає юсто тінцідунт аліквам.',
        revocationOwner: 'Hlib',
        rating: 5,
      },
    });
  }
}
