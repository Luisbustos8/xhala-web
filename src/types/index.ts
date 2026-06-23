export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  price?: string;
  duration?: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  step: number;
}

export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}
