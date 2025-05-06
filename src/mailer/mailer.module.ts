import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerController } from './mailer.controller';
import { MailService } from './mailer.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.example.com',
        port: 587,
        auth: {
          user: 'user@example.com',
          pass: 'password',
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
  controllers: [MailerController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
