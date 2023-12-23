import { Module } from '@nestjs/common';
import { CourseController } from 'src/course/course.controller';
import { CourseService } from 'src/course/course.service';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
