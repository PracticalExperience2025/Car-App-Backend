import { Injectable } from '@nestjs/common';
import { CarService } from 'src/car/car.service';
import { MailService } from 'src/mailer/mailer.service';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class SchedulerService {
  constructor(
    private readonly mailService: MailService,
    private readonly carService: CarService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async handleCron() {
    const cars = await this.carService.findAll();
    const today = new Date().toISOString().split('T')[0];

    for (const car of cars) {
      const insuranceDate = new Date(car.insuranceDate).toISOString().split('T')[0];
      if (insuranceDate === today) {
        await this.mailService.sendInsuranceExpiryEmail(car.ownerId, car);
      }
      // Repeat for other dates like vignetteDate, registrationDate, etc.
    }
  }
}
