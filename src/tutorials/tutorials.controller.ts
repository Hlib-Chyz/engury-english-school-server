import { Controller, Get, Param } from '@nestjs/common';
import { TutorialsService } from 'src/tutorials/tutorials.service';
import { ITutorial } from 'src/tutorials/tutorials.types';

@Controller('tutorials')
export class TutorialsController {
  public constructor(private readonly tutorialsService: TutorialsService) {}

  @Get(':id')
  public getOne(@Param('id') id: string): Promise<ITutorial['text']> {
    return this.tutorialsService.getOne(id);
  }

  @Get()
  public getAll(): Promise<ITutorial[]> {
    return this.tutorialsService.getAll();
  }
}
