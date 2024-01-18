import { Test, TestingModule } from '@nestjs/testing';
import { S3Service } from './s3.service';
import * as AWSMock from 'aws-sdk-mock';
import { AWSError } from 'aws-sdk';

describe('S3Service', () => {
  let service: S3Service;

  beforeEach(async () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    AWSMock.setSDKInstance(require('aws-sdk'));
    AWSMock.mock('S3', 'getObject', (params, callback) => {
      if (params.Key === 'courses.json') {
        callback(null, {
          Body: JSON.stringify([{ id: '1', name: 'Course 1' }]),
        });
      } else if (params.Key === 'tutorials.json') {
        callback(null, {
          Body: JSON.stringify([{ id: '1', text: 'Tutorial 1' }]),
        });
      } else {
        callback({
          name: 'Error',
          message: 'error message',
          code: '400',
        } as AWSError);
      }
    });

    const module: TestingModule = await Test.createTestingModule({
      providers: [S3Service],
    }).compile();

    service = module.get<S3Service>(S3Service);
  });

  afterEach(() => {
    AWSMock.restore('S3');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCourses', () => {
    it('should return an array of course information', async () => {
      const courses = await service.getCourses();
      expect(courses).toEqual([{ id: '1', name: 'Course 1' }]);
    });
  });

  describe('getCourseInfo', () => {
    it('should return course information by id', async () => {
      const courseInfo = await service.getCourseInfo('1');
      expect(courseInfo).toEqual({ id: '1', name: 'Course 1' });
    });

    it('should return undefined for non-existing course id', async () => {
      const courseInfo = await service.getCourseInfo('nonexistent');
      expect(courseInfo).toBeUndefined();
    });
  });

  describe('getTutorials', () => {
    it('should return an array of tutorials', async () => {
      const tutorials = await service.getTutorials();
      expect(tutorials).toEqual([{ id: '1', text: 'Tutorial 1' }]);
    });
  });

  describe('getTutorial', () => {
    it('should return tutorial text by id', async () => {
      const tutorialText = await service.getTutorial('1');
      expect(tutorialText).toEqual('Tutorial 1');
    });

    it('should return undefined for non-existing tutorial id', async () => {
      const tutorialText = await service.getTutorial('nonexistent');
      expect(tutorialText).toBeUndefined();
    });
  });
});
