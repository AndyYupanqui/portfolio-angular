import { Component } from '@angular/core';

interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

interface Skill {
  name: string;
  icon: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      title: 'CLOUD & INFRASTRUCTURE',
      color: 'primary',
      skills: [
        { name: 'AWS', icon: 'fab fa-aws', level: 'expert' },
        { name: 'Azure', icon: 'fab fa-microsoft', level: 'advanced' },
        { name: 'GCP', icon: 'fab fa-google', level: 'advanced' },
        { name: 'Docker', icon: 'fab fa-docker', level: 'expert' },
        { name: 'Kubernetes', icon: 'fas fa-dharmachakra', level: 'expert' },
        { name: 'Terraform', icon: 'fas fa-cloud', level: 'advanced' }
      ]
    },
    {
      title: 'BACKEND',
      color: 'secondary',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node-js', level: 'expert' },
        { name: 'Python', icon: 'fab fa-python', level: 'expert' },
        { name: 'Java', icon: 'fab fa-java', level: 'advanced' },
        { name: 'Go', icon: 'fas fa-code', level: 'intermediate' },
        { name: 'PostgreSQL', icon: 'fas fa-database', level: 'expert' },
        { name: 'MongoDB', icon: 'fas fa-database', level: 'advanced' }
      ]
    },
    {
      title: 'FRONTEND',
      color: 'accent',
      skills: [
        { name: 'Angular', icon: 'fab fa-angular', level: 'expert' },
        { name: 'React', icon: 'fab fa-react', level: 'expert' },
        { name: 'Vue.js', icon: 'fab fa-vuejs', level: 'advanced' },
        { name: 'TypeScript', icon: 'fas fa-code', level: 'expert' },
        { name: 'SASS', icon: 'fab fa-sass', level: 'expert' },
        { name: 'Tailwind', icon: 'fas fa-wind', level: 'advanced' }
      ]
    },
    {
      title: 'DEVOPS & TOOLS',
      color: 'primary',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', level: 'expert' },
        { name: 'GitHub Actions', icon: 'fab fa-github', level: 'expert' },
        { name: 'Jenkins', icon: 'fas fa-cog', level: 'advanced' },
        { name: 'Grafana', icon: 'fas fa-chart-line', level: 'advanced' },
        { name: 'Nginx', icon: 'fas fa-server', level: 'expert' },
        { name: 'Redis', icon: 'fas fa-database', level: 'advanced' }
      ]
    }
  ];

  getLevelClass(level: string): string {
    return `level-${level}`;
  }
}
