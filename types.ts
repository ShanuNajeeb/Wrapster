
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  content: string;
  date: string;
}
