import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { config } from 'dotenv';
import { ICourseInfo } from 'src/courses/courses.types';

config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

@Injectable()
export class S3Service {
  public async getCourseInfo(id: string): Promise<ICourseInfo> {
    const courses = await this.getCourses();
    return courses.find((course) => course.id === id);
  }

  public async getCourses(): Promise<ICourseInfo[]> {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: 'courses.json',
    };
    const response = await s3.getObject(params).promise();
    return await JSON.parse(response.Body.toString());
  }
}
