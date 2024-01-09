import { Module } from '@nestjs/common';
import { S3Service } from 'src/s3/s3.service';
import { TutorialsController } from 'src/tutorials/tutorials.controller';
import { TutorialsService } from 'src/tutorials/tutorials.service';

@Module({
  controllers: [TutorialsController],
  providers: [TutorialsService, S3Service],
})
export class TutorialModule {}
