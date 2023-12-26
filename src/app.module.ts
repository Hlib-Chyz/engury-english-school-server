import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CoursesModule } from 'src/courses/courses.module';
import { ReviewModule } from 'src/review/review.module';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    MailModule,
    ReviewModule,
    CoursesModule,
    MongooseModule.forRootAsync({
      useFactory: async (config: ConfigService) => ({
        uri: config.get('MONGO_URI'),
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
})
export class AppModule {}
