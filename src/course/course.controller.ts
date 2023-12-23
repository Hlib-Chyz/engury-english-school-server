import { Controller, Get } from '@nestjs/common';
import { CourseService } from 'src/course/course.service';
import { ICourseInfo } from 'src/course/course.types';

@Controller('course')
export class CourseController {
  public constructor(private readonly courseService: CourseService) {}

  @Get()
  public getOne(): ICourseInfo {
    return this.courseService.getCourse('native-speackirizm');
  }
}
