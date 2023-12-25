import { Controller, Get, Request } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { CourseNames, ICourseInfo } from 'src/course/course.types';

@Controller('course')
export class CourseController {
  public constructor(private readonly courseService: CourseService) {}

  @Get()
  public getOne(
    @Request() { body }: { body: { courseName: CourseNames } },
  ): ICourseInfo {
    return this.courseService.getCourse(body.courseName);
  }
}
