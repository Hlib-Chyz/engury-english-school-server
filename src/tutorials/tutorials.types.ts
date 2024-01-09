export const enum TextType {
  Title,
  ShortDescription,
  SubTitle,
  Text,
}

export interface ITutorial {
  date: string;
  title: string;
  description: string;
  shortDescription: string;
  id: string;
  text: {
    type: TextType;
    text: string;
  }[];
}
