// app.module.ts
import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { MailModule } from 'src/mailer/mailer.module';
import { CarService } from 'src/car/car.service';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ScheduleModule.forRoot(), MailModule],
  providers: [SchedulerService, CarService],
})
export class AppModule {}
