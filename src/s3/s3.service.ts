import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { ICourseInfo } from 'src/course/course.types';
import { config } from 'dotenv';

config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

@Injectable()
export class S3Service {
  public async getJsonFromS3(fileName: string): Promise<ICourseInfo> {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME, // Bucket Name
      Key: `${fileName}.json`,
    };
    const response = await s3.getObject(params).promise();
    return JSON.parse(response.Body.toString());
  }
}
