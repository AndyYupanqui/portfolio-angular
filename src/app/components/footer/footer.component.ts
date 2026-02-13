import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Perfil', id: 'perfil' },
    { label: 'Stack', id: 'stack' },
    { label: 'Trabajos', id: 'trabajos' },
    { label: 'Contacto', id: 'contacto' }
  ];

  scrollToSection(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
