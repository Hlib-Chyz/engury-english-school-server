import { Module } from '@nestjs/common';
import { CourseController } from 'src/course/course.controller';
import { CourseService } from 'src/course/course.service';
import { S3Service } from 'src/s3/s3.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService, S3Service],
})
export class CourseModule {}
