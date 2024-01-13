import { TestingModule, Test } from '@nestjs/testing';
import { S3Service } from 'src/s3/s3.service';
import { TutorialsService } from 'src/tutorials/tutorials.service';
import { ITutorial, TextType } from 'src/tutorials/tutorials.types';

jest.mock('src/s3/s3.service');

describe('TutorialsService', () => {
  let service: TutorialsService;
  let s3Service: S3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TutorialsService, S3Service],
    }).compile();

    service = module.get<TutorialsService>(TutorialsService);
    s3Service = module.get<S3Service>(S3Service);
  });

  describe('getOne', () => {
    it('should return a tutorial text by ID', async () => {
      const mockTutorialText: ITutorial['text'] = [
        {
          type: TextType.ShortDescription,
          text: 'Sample Tutorial Text',
        },
      ];
      jest
        .spyOn(s3Service, 'getTutorial')
        .mockResolvedValueOnce(mockTutorialText);

      const result = await service.getOne('1');
      expect(result).toEqual(mockTutorialText);
    });
  });

  describe('getAll', () => {
    it('should return an array of tutorials', async () => {
      const mockTutorials: ITutorial[] = [
        { id: '1', title: 'Sample Tutorial 1' },
        { id: '2', title: 'Sample Tutorial 2' },
      ] as ITutorial[];
      jest
        .spyOn(s3Service, 'getTutorials')
        .mockResolvedValueOnce(mockTutorials);

      const result = await service.getAll();
      expect(result).toEqual(mockTutorials);
    });
  });
});
