import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;
  activeSection = 'inicio';

  menuItems = [
    { label: 'INICIO', id: 'inicio' },
    { label: 'PERFIL', id: 'perfil' },
    { label: 'STACK', id: 'stack' },
    { label: 'TRABAJOS', id: 'trabajos' },
    { label: 'CONTACTO', id: 'contacto' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    
    // Detectar sección activa
    const sections = ['inicio', 'perfil', 'stack', 'trabajos', 'contacto'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
