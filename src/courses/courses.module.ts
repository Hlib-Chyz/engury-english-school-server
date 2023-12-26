import { Module } from '@nestjs/common';
import { CoursesController } from 'src/courses/courses.controller';
import { CoursesService } from 'src/courses/courses.service';
import { S3Service } from 'src/s3/s3.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService, S3Service],
})
export class CoursesModule {}
