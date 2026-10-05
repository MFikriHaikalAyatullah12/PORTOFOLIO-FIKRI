export type ProjectCategory = "Web" | "Data Analysis";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: ProjectCategory;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  highlights: string[];
}

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  file: string;
  thumbnail?: string;
}

export interface SkillGroup {
  name: string;
  description: string;
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}
