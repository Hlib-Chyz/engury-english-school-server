import { Injectable } from '@nestjs/common';
import { ICourseInfo } from 'src/courses/courses.types';
import { S3Service } from 'src/s3/s3.service';

@Injectable()
export class CoursesService {
  public constructor(private readonly s3Service: S3Service) {}

  public async getOne(id: string): Promise<ICourseInfo> {
    return await this.s3Service.getCourseInfo(id);
  }

  public async getAll(): Promise<ICourseInfo[]> {
    return await this.s3Service.getCourses();
  }
}
