
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  description: string;
}

export interface ServiceDetailContent {
  longDescription: string;
  features: string[];
  imageUrl: string;
  stats: { label: string; value: string }[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details?: ServiceDetailContent;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
