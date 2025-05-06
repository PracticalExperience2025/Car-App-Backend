// mail.service.ts
import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendInsuranceExpiryEmail(to: string, car: any) {
    await this.mailerService.sendMail({
      to,
      subject: 'Insurance Expiry Notification',
      text: `Your car ${car.brand} ${car.model}'s insurance expires today.`,
    });
  }
}
