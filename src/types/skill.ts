export interface SkillDto {
  name: string;
  icon: string;
  progress: number;
  experience: string;
}

export interface SkillArticleDto {
  heading: string;
  subarticles: Array<{
    subheading: string;
    skills: SkillDto[];
  }>;
}
