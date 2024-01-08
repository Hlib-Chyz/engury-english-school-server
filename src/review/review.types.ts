export interface IReview {
  _id: string | undefined;
  owner: string;
  revocation: string;
  rating: number;
  courseId: string;
}
