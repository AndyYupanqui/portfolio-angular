import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'Bizner',
      category: 'FULL STACK + CLOUD ARCHITECTURE',
      description: 'Bizner.ai es una plataforma de gestión empresarial para ferreterías y negocios, que permite emitir facturas y boletas electrónicas, administrar inventario y clientes, generar cotizaciones y obtener reportes en tiempo real desde dispositivos web o móviles.',
      tech: ['Angular', 'Node.js', 'GCP', 'Azure', 'PostgreSQL'],
      image: 'bizner',
      link: 'https://www.bizner.ai/',
      featured: true
    },
    {
      id: 2,
      title: 'UNMSM',
      category: 'FULL STACK + DEVOPS',
      description: 'Universidad Nacional Mayor de San Marcos (UNMSM) — Universidad pública peruana fundada en 1551, conocida como la más antigua del país y una de las más importantes de América Latina. Su sitio oficial brinda información institucional, oferta académica, noticias, admisión y actividades culturales, destacando su compromiso con la educación superior, la investigación científica y el desarrollo social en múltiples áreas del conocimiento.',
      tech: ['React', 'Node.js', 'AWS', 'MySQL'],
      image: 'unmsm',
      link: 'https://www.unmsm.edu.pe/',
      featured: true
    },
    {
      id: 3,
      title: 'CELIMA TREBOL',
      category: 'BACKEND',
      description: 'Es el sitio oficial del Grupo Celima Trebol —un grupo empresarial tradicional peruano especializado en revestimientos cerámicos, porcelanatos, sanitarios y griferías— diseñado para mostrar su catálogo de productos, ofrecer información institucional y facilitar el acceso a clientes, profesionales y distribuidores.',
      tech: ['PHP', 'Laravel', 'MySQL'],
      image: 'celima',
      link: 'https://celima-trebol.com/',
      featured: false
    },
    {
      id: 4,
      title: 'CASILLA ELECTRÓNICA',
      category: 'FULL STACK',
      description: 'La Casilla Electrónica de SUNARP es un sistema digital oficial que funciona como un buzón electrónico seguro para recibir notificaciones, resoluciones y comunicaciones administrativas relacionadas con trámites registrales. Permite a personas naturales, jurídicas y notarios acceder a sus notificaciones de forma legal, gratuita y desde cualquier lugar sin necesidad de notificación en papel.',
      tech: ['Angular', 'Spring', 'Oracle'],
      image: 'casilla',
      link: 'https://casilla.sunarp.gob.pe/casillaelectronica/',
      featured: false
    },
    {
      id: 5,
      title: 'SISTEMA DE BIBLIOTECAS Y BIBLIOTECA CENTRAL',
      category: 'FULL STACK',
      description: 'Es el portal del Sistema de Bibliotecas de la Universidad Nacional Mayor de San Marcos que centraliza los servicios bibliográficos académicos. Ofrece acceso a catálogos de libros y recursos digitales, bases de datos científicas, servicios de búsqueda e información para préstamos y uso de materiales físicos y electrónicos, dirigido a la comunidad académica de la UNMSM.',
      tech: ['HTML', 'PHP', 'MySQL'],
      image: 'biblioteca',
      link: 'https://sisbib.unmsm.edu.pe/',
      featured: true
    },
    {
      id: 6,
      title: 'FACULTAD DE CIENCIAS BIOLÓGICAS',
      category: 'FULL STACK + CLOUD',
      description: 'Es el portal web de la Facultad de Ciencias Biológicas de la Universidad Nacional Mayor de San Marcos, dedicado a brindar información sobre la facultad, su oferta académica, investigación, noticias, eventos y recursos de contacto para estudiantes, docentes e investigadores en el área de ciencias biológicas.',
      tech: ['React', 'Node.js', 'AWS', 'MySQL'],
      image: 'biologia',
      link: 'https://biologia.unmsm.edu.pe/',
      featured: false
    }
  ];

  openProject(link: string): void {
    window.open(link, '_blank');
  }
}
