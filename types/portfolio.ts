export interface Project {
  id: string;
  name: string;
  subtitle: string;
  category: "ai-data" | "full-stack" | "research-twin";
  categoryLabel: string;
  shortDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string | null;
  comingSoon?: boolean;
  hasDossier?: boolean;
  dossier?: {
    overview: string;
    architecture: string;
    keyMetrics: { label: string; value: string }[];
    impact: string;
  };
}

export interface SkillItem {
  name: string;
  category: "programming" | "ai-data" | "web" | "tools";
  categoryName: string;
  description: string;
  technologies: string[];
  experience: string;
  relatedProjects: string[];
  proficiency?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  location: string;
  description: string;
  cgpa: string;
  subjects: string[];
  achievements: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skills: string[];
  certificateUrl: string;
  verified: boolean;
}

export interface ResearchWorkflowStep {
  stepNumber: number;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  technologies: string[];
  metrics?: string;
}

export interface ContactMessageRecord {
  id: string;
  name: string;
  email: string;
  phone?: string | null;
  subject: string;
  message: string;
  createdAt: string;
  status: "UNREAD" | "READ" | "ARCHIVED";
}
