import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { config } from 'dotenv';
import { ICourseInfo } from 'src/courses/courses.types';
import { ITutorial } from 'src/tutorials/tutorials.types';

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
    return await this.getJsonFile<ICourseInfo>('courses');
  }

  public async getTutorial(id: string): Promise<ITutorial['text']> {
    const tutorials = await this.getTutorials();
    return tutorials.find((tutorial) => tutorial.id === id).text;
  }

  public async getTutorials(): Promise<ITutorial[]> {
    return await this.getJsonFile<ITutorial>('tutorials');
  }

  private async getJsonFile<T>(fileName: string): Promise<T[]> {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${fileName}.json`,
    };
    const response = await s3.getObject(params).promise();
    return await JSON.parse(response.Body.toString());
  }
}
