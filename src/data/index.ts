// Data index file for easy imports
export { default as personalData } from './personal.json';
export { default as aboutData } from './about.json';
export { default as experienceData } from './experience.json';
export { default as projectsData } from './projects.json';
export { default as contactData } from './contact.json';
export { default as navigationData } from './navigation.json';

// Type definitions for better TypeScript support
export interface PersonalInfo {
  name: string;
  title: string;
  description: string;
  location: string;
  phone: string;
  email: string;
  website: string;
  profileImage: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  href: string;
  color: string;
}

export interface Availability {
  status: string;
  description: string;
  isAvailable: boolean;
}

export interface Skill {
  name: string;
  category: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  achievements: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  icon: string;
  technologies: string[];
  highlights: string[];
  color: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FormField {
  label: string;
  placeholder: string;
  required: boolean;
  type?: string;
  rows?: number;
}
