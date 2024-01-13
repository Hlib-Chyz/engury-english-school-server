import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from 'src/courses/courses.controller';
import { CoursesService } from 'src/courses/courses.service';
import { ICourseInfo } from 'src/courses/courses.types';

jest.mock('src/courses/courses.service');

describe('CoursesController', () => {
  let controller: CoursesController;
  let service: CoursesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursesController],
      providers: [CoursesService],
    }).compile();

    controller = module.get<CoursesController>(CoursesController);
    service = module.get<CoursesService>(CoursesService);
  });

  describe('getOne', () => {
    it('should return a course by ID', async () => {
      const mockCourse: ICourseInfo = {
        id: '1',
        title: 'Sample Course',
      } as ICourseInfo;
      jest.spyOn(service, 'getOne').mockResolvedValueOnce(mockCourse);

      const result = await controller.getOne('1');
      expect(result).toEqual(mockCourse);
    });
  });

  describe('getAll', () => {
    it('should return an array of courses', async () => {
      const mockCourses: ICourseInfo[] = [
        { id: '1', title: 'Sample Course 1' },
        { id: '2', title: 'Sample Course 2' },
      ] as ICourseInfo[];
      jest.spyOn(service, 'getAll').mockResolvedValueOnce(mockCourses);

      const result = await controller.getAll();
      expect(result).toEqual(mockCourses);
    });
  });
});
