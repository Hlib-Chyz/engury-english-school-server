import { Test, TestingModule } from '@nestjs/testing';
import { TutorialsController } from 'src/tutorials/tutorials.controller';
import { TutorialsService } from 'src/tutorials/tutorials.service';
import { ITutorial, TextType } from 'src/tutorials/tutorials.types';

jest.mock('src/tutorials/tutorials.service');

describe('TutorialsController', () => {
  let controller: TutorialsController;
  let service: TutorialsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TutorialsController],
      providers: [TutorialsService],
    }).compile();

    controller = module.get<TutorialsController>(TutorialsController);
    service = module.get<TutorialsService>(TutorialsService);
  });

  describe('getOne', () => {
    it('should return a tutorial text by ID', async () => {
      const mockTutorialText: ITutorial['text'] = [
        {
          type: TextType.ShortDescription,
          text: 'Sample Tutorial Text',
        },
      ];
      jest.spyOn(service, 'getOne').mockResolvedValueOnce(mockTutorialText);

      const result = await controller.getOne('1');
      expect(result).toEqual(mockTutorialText);
    });
  });

  describe('getAll', () => {
    it('should return an array of tutorials', async () => {
      const mockTutorials: ITutorial[] = [
        { id: '1', title: 'Sample Tutorial 1' },
        { id: '2', title: 'Sample Tutorial 2' },
      ] as ITutorial[];
      jest.spyOn(service, 'getAll').mockResolvedValueOnce(mockTutorials);

      const result = await controller.getAll();
      expect(result).toEqual(mockTutorials);
    });
  });
});
