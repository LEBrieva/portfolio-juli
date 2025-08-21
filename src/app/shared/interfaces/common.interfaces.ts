export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  label: string;
}

export interface ContactInfo {
  type: 'email' | 'phone' | 'location' | 'linkedin';
  value: string;
  label: string;
  icon: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  projectUrl?: string;
  demoUrl?: string;
  category: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatarUrl?: string;
  date: Date;
}

export interface PersonInfo {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  experience: string;
}

export type SupportedLanguage = 'es' | 'en' | 'pt';
