import { Test, TestingModule } from '@nestjs/testing';
import { S3Service } from 'src/s3/s3.service';
import { TutorialsController } from 'src/tutorials/tutorials.controller';
import { TutorialModule } from 'src/tutorials/tutorials.module';
import { TutorialsService } from 'src/tutorials/tutorials.service';

describe('TutorialModule', () => {
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [TutorialModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have TutorialsController', () => {
    const controller = module.get<TutorialsController>(TutorialsController);
    expect(controller).toBeDefined();
  });

  it('should have TutorialsService', () => {
    const service = module.get<TutorialsService>(TutorialsService);
    expect(service).toBeDefined();
  });

  it('should have S3Service', () => {
    const service = module.get<S3Service>(S3Service);
    expect(service).toBeDefined();
  });
});
