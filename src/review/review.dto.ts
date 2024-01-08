import { IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  _id: string;
  @IsNotEmpty({ message: 'Owner should not be empty' })
  owner: string;
  @IsNotEmpty({ message: 'Revocation should not be empty' })
  revocation: string;
  @IsNotEmpty({ message: 'Rating should not be empty' })
  rating: number;
  @IsNotEmpty({ message: 'Course id should not be empty' })
  courseId: string;
}
