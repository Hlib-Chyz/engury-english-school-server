import { Injectable } from '@nestjs/common';
import { CourseNames, ICourseInfo } from 'src/course/course.types';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class CourseService {
  public constructor(private readonly s3Service: S3Service) {}

  public getCourse(courseName: CourseNames): ICourseInfo {
    return this.s3Service.getJsonFromS3(courseName) as any;
  }
}
