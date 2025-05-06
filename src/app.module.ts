import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { MailerModule } from './mailer/mailer.module';
import { SchedulerModule } from './scheduler/scheduler.module';

@Module({
  imports: [CarModule, PrismaModule, AuthModule, UserModule, MailerModule, SchedulerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
