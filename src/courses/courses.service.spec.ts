import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from 'src/courses/courses.service';
import { ICourseInfo } from 'src/courses/courses.types';
import { S3Service } from 'src/s3/s3.service';

jest.mock('src/s3/s3.service');

describe('CoursesService', () => {
  let service: CoursesService;
  let s3Service: S3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService, S3Service],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
    s3Service = module.get<S3Service>(S3Service);
  });

  describe('getOne', () => {
    it('should return a course by ID', async () => {
      const mockCourse: ICourseInfo = {
        id: '1',
        title: 'Sample Course',
      } as ICourseInfo;
      jest.spyOn(s3Service, 'getCourseInfo').mockResolvedValueOnce(mockCourse);

      const result = await service.getOne('1');
      expect(result).toEqual(mockCourse);
    });
  });

  describe('getAll', () => {
    it('should return an array of courses', async () => {
      const mockCourses: ICourseInfo[] = [
        { id: '1', title: 'Sample Course 1' },
        { id: '2', title: 'Sample Course 2' },
      ] as ICourseInfo[];
      jest.spyOn(s3Service, 'getCourses').mockResolvedValueOnce(mockCourses);

      const result = await service.getAll();
      expect(result).toEqual(mockCourses);
    });
  });
});
