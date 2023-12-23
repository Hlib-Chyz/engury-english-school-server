export interface ICourseInfo {
  courseSections: {
    name: string;
    subSections: string[];
    isExpanded: boolean;
  }[];
  roadByCourse: string[];
  forWhomIsThisCourse: {
    smile: string;
    text: string;
    bgColor: string;
  }[];
  questionsYouMightHave: {
    title: string;
    text: string;
    showText: boolean;
  }[];
  pricingOptions: {
    price: string;
    name: string;
  }[];
  moreAboutPriceOptions: {
    text: string;
    name: string;
    top?: boolean;
  }[];
}
