import { Injectable } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';
import { ITutorial } from 'src/tutorials/tutorials.types';

@Injectable()
export class TutorialsService {
  public constructor(private readonly s3Service: S3Service) {}

  public async getOne(id: string): Promise<ITutorial['text']> {
    return await this.s3Service.getTutorial(id);
  }

  public async getAll(): Promise<ITutorial[]> {
    return await this.s3Service.getTutorials();
  }
}
