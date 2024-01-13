import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from 'src/courses/courses.controller';
import { CoursesModule } from 'src/courses/courses.module';
import { CoursesService } from 'src/courses/courses.service';
import { S3Service } from 'src/s3/s3.service';

describe('CoursesModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [CoursesModule],
    }).compile();
  });

  it('should be defined', () => {
    expect(module).toBeDefined();
  });

  it('should have CoursesController', () => {
    const controller = module.get<CoursesController>(CoursesController);
    expect(controller).toBeDefined();
  });

  it('should have CoursesService', () => {
    const service = module.get<CoursesService>(CoursesService);
    expect(service).toBeDefined();
  });

  it('should have S3Service', () => {
    const service = module.get<S3Service>(S3Service);
    expect(service).toBeDefined();
  });
});
