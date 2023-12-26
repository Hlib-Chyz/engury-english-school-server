import { Controller, Get, Param } from '@nestjs/common';
import { CoursesService } from 'src/courses/courses.service';
import { ICourseInfo } from 'src/courses/courses.types';

@Controller('courses')
export class CoursesController {
  public constructor(private readonly courseService: CoursesService) {}

  @Get(':id')
  public getOne(@Param('id') id: string): Promise<ICourseInfo> {
    return this.courseService.getOne(id);
  }

  @Get()
  public getAll(): Promise<ICourseInfo[]> {
    return this.courseService.getAll();
  }
}
