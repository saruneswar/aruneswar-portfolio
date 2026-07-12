export interface Profile {
  name: string;
  role: string;
  headline: string;
  about: string;
  location: string;
  email: string;
  phone: string;
  resumeUrl: string;
  university?: string;
  cgpa?: string;
  expectedGraduation?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description?: string;
  points?: string[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  focusAreas?: string[];
  responsibilities?: string[];
  technologiesUsed?: string[];
  skillsGained?: string[];
  keyLearnings?: string[];
  certificateUrl?: string;
  logo?: string;
  gallery?: string[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  coverImage: string;
  gallery: string[];
  demoVideo?: string;
  technologies: string[];
  role: string;
  outcomes: string[];
  githubUrl?: string;
  liveUrl?: string;
  problemStatement?: string;
  objectives?: string[];
  systemArchitecture?: string;
  hardwareUsed?: string[];
  softwareUsed?: string[];
  workingPrinciple?: string;
  engineeringChallenges?: string[];
  solutionsImplemented?: string[];
  keyLearnings?: string[];
  futureImprovements?: string[];
  resultsAndImpact?: string[];
  status?: string;
  category?: string;
  duration?: string;
  downloadUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  date: string;
  achievementLevel: string;
  description: string;
  image?: string;
  certificate?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  image?: string;
}
