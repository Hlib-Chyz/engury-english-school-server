import { MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import { CoursesModule } from 'src/courses/courses.module';
import { MailModule } from 'src/mail/mail.module';
import { ReviewModule } from 'src/review/review.module';
import { TutorialModule } from 'src/tutorials/tutorials.module';

describe('AppModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        MongooseModule.forRoot('mongodb://localhost/test', {}),
        AppModule,
      ],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should import AppModule', () => {
    const appModule = module.get(AppModule);
    expect(appModule).toBeDefined();
  });

  it('should import MailModule', () => {
    const mailModule = module.get(MailModule);
    expect(mailModule).toBeDefined();
  });

  it('should import ReviewModule', () => {
    const reviewModule = module.get(ReviewModule);
    expect(reviewModule).toBeDefined();
  });

  it('should import CoursesModule', () => {
    const coursesModule = module.get(CoursesModule);
    expect(coursesModule).toBeDefined();
  });

  it('should import TutorialModule', () => {
    const tutorialModule = module.get(TutorialModule);
    expect(tutorialModule).toBeDefined();
  });

  afterAll(async () => {
    await module.close();
  });
});
