import { Injectable } from '@nestjs/common';
import * as NATIVE_SPEACKIRIZM from './data/native-speackirizm.json';
import * as LESSONS_WITH_ZLATA from './data/lessons-with-zlata.json';
import * as EXTRA_SPEAKING from './data/extra-speaking.json';
import * as EXTRA_GRAMMAR from './data/extra-grammar.json';
import { ICourseInfo } from 'src/course/course.types';

@Injectable()
export class CourseService {
  public getCourse(
    courseName:
      | 'native-speackirizm'
      | 'extra-grammar'
      | 'extra-speaking'
      | 'lessons-with-zlata',
  ): ICourseInfo {
    switch (courseName) {
      case 'native-speackirizm':
        return NATIVE_SPEACKIRIZM;
      case 'extra-grammar':
        return EXTRA_GRAMMAR;
      case 'extra-speaking':
        return EXTRA_SPEAKING;
      case 'lessons-with-zlata':
        return LESSONS_WITH_ZLATA;
      default:
        break;
    }
  }
}
