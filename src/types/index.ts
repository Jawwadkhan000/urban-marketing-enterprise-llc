export interface Service {
  number: string;
  title: string;
  description: string;
  services: string[];
}

export interface CaseStudy {
  id: string;
  clientLocation: string;
  campaign: string;
  result: string;
  imageUrl: string;
  description?: string;
  challenge?: string;
  strategy?: string;
}

export interface Testimonial {
  quote: string;
  attribution: string;
}

export interface Stat {
  value: string;
  label: string;
}
