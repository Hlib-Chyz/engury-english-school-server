import { IsNotEmpty } from 'class-validator';

export class CreateReviewDto {
  public _id: string;
  @IsNotEmpty({ message: 'Owner should not be empty' })
  public owner: string;
  @IsNotEmpty({ message: 'Revocation should not be empty' })
  public revocation: string;
  @IsNotEmpty({ message: 'Rating should not be empty' })
  public rating: number;
  @IsNotEmpty({ message: 'Course id should not be empty' })
  public courseId: string;
}
