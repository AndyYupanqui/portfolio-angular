import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactMethods = [
    { icon: 'fab fa-linkedin', label: 'LINKEDIN', value: '/in/andy-yupanqui-garcia-b73b88150', link: 'https://linkedin.com/in/andy-yupanqui-garcia-b73b88150' },
    { icon: 'fab fa-whatsapp', label: 'WHATSAPP', value: '+51 991 409 789', link: 'https://wa.me/51991409789' },
    { icon: 'fab fa-github', label: 'GITHUB', value: '@AndyYupanqui', link: 'https://github.com/AndyYupanqui' },
    { icon: 'fas fa-envelope', label: 'EMAIL', value: 'andyyupanqui@gmail.com', link: 'mailto:andyyupanqui@gmail.com' }
  ];
  
  currentYear = new Date().getFullYear();
}
