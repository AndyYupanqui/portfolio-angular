import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  metrics = [
    { value: 0, target: 99, suffix: '%', label: 'UPTIME', color: 'primary' },
    { value: 0, target: 50, suffix: '+', label: 'DEPLOYS/MES', color: 'secondary' },
    { value: 0, target: 15, suffix: '', label: 'CLOUD CERTS', color: 'accent' }
  ];

  expertise = [
    { area: 'Cloud Architecture', level: 95, icon: 'fa-cloud' },
    { area: 'Backend Development', level: 90, icon: 'fa-server' },
    { area: 'Frontend Engineering', level: 85, icon: 'fa-code' },
    { area: 'DevOps & CI/CD', level: 88, icon: 'fa-infinity' }
  ];

  private hasAnimated = false;

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.hasAnimated) {
      const aboutSection = document.getElementById('perfil');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;
        
        if (isVisible) {
          this.animateMetrics();
          this.hasAnimated = true;
        }
      }
    }
  }

  animateMetrics(): void {
    this.metrics.forEach(metric => {
      const increment = metric.target / 60;
      const timer = setInterval(() => {
        metric.value += increment;
        if (metric.value >= metric.target) {
          metric.value = metric.target;
          clearInterval(timer);
        }
      }, 30);
    });
  }
}
