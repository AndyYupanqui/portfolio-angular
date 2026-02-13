import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  typedText = '';
  fullText = 'Full-Stack & Cloud Engineer';
  typingSpeed = 150;
  
  socialLinks = [
    { icon: 'fab fa-linkedin', url: 'https://linkedin.com/in/andy-yupanqui-garcia-b73b88150', label: 'LINKEDIN' },
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/51991409789', label: 'WHATSAPP' },
    { icon: 'fab fa-github', url: 'https://github.com/AndyYupanqui', label: 'GITHUB' },
    { icon: 'fas fa-envelope', url: 'mailto:andyyupanqui@gmail.com', label: 'EMAIL' }
  ];

  ngOnInit(): void {
    this.typeText();
  }

  typeText(): void {
    let index = 0;
    const type = () => {
      if (index < this.fullText.length) {
        this.typedText += this.fullText.charAt(index);
        index++;
        setTimeout(type, this.typingSpeed);
      }
    };
    type();
  }

  downloadCV(): void {
    const cvUrl = 'assets/CV_ANDY_ANDER_YUPANQUI_GARCIA.pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'CV_ANDY_ANDER_YUPANQUI_GARCIA.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  scrollToContact(): void {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
