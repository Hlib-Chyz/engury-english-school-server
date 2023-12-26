import { Injectable } from '@nestjs/common';
import { ICourseInfo } from 'src/courses/courses.types';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class CoursesService {
  public constructor(private readonly s3Service: S3Service) {}

  public getOne(id: string): Promise<ICourseInfo> {
    return this.s3Service.getCourseInfo(id);
  }

  public getAll(): Promise<ICourseInfo[]> {
    return this.s3Service.getCourses();
  }
}
