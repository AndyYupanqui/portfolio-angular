# 🚀 Portfolio Angular - Cloud Architect & Full Stack Developer

Portafolio profesional con estética **Neo-Brutalist Tech** - Diseño audaz que combina brutalismo digital con elementos futuristas.

## ✨ Características de Diseño

### Estética Neo-Brutalist
- **Tipografía Distintiva**: Bebas Neue (display), JetBrains Mono (código), Montserrat (body)
- **Paleta Audaz**: Negro profundo + Amarillo eléctrico + Magenta cyber + Cyan brillante
- **Layouts Asimétricos**: Grid-breaking, superposiciones, flujo diagonal
- **Animaciones Dramáticas**: Glitch effects, scan lines CRT, floating shapes
- **Detalles Únicos**: Cursor personalizado, sombras brutales, bordes gruesos

### Componentes Implementados
- ✅ **Background Effects**: Grid animado, scan lines, formas flotantes, noise overlay
- ✅ **Header**: Navegación fija con detección de sección activa
- ✅ **Hero**: Efecto typewriter, estadísticas flotantes, panel de redes sociales
- ✅ **About**: Layout asimétrico con métricas animadas y barras de expertise
- ✅ **Skills**: Dashboard tipo industrial con 4 categorías y niveles de dominio
- ✅ **Projects**: Galería tipo mosaico con 6 proyectos destacados
- ✅ **Contact**: CTA llamativo con métodos de contacto animados
- ✅ **Footer**: Diseño tipo terminal con navegación rápida

## 🛠️ Tecnologías

- **Angular 17** - Framework principal
- **TypeScript** - Tipado fuerte
- **SCSS** - Estilos avanzados
- **RxJS** - Programación reactiva
- **Font Awesome 6** - Iconos
- **Google Fonts** - Tipografía distintiva

## 📋 Requisitos

- Node.js v18+
- npm v9+
- Angular CLI v17+

## 🔧 Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Instalar Angular CLI (si no lo tienes)
npm install -g @angular/cli

# 3. Iniciar servidor de desarrollo
npm start
# o
ng serve

# 4. Abrir navegador
# http://localhost:4200
```

## 📝 Personalización

### 1. Información Personal

#### Hero Section (`src/app/components/hero/`)
```typescript
// hero.component.ts
fullText = 'TU TÍTULO';  // Cambia el texto animado
socialLinks = [...]       // Actualiza tus redes sociales
```

#### About Section (`src/app/components/about/`)
```typescript
// about.component.ts
metrics = [...]           // Modifica tus métricas
expertise = [...]         // Ajusta tus áreas de expertise
```

```html
<!-- about.component.html -->
<!-- Edita los párrafos con tu historia -->
```

#### Skills Section (`src/app/components/skills/`)
```typescript
// skills.component.ts
skillCategories = [...]   // Personaliza tus categorías y tecnologías
```

#### Projects Section (`src/app/components/projects/`)
```typescript
// projects.component.ts
projects = [...]          // Agrega tus proyectos reales
```

#### Contact Section (`src/app/components/contact/`)
```typescript
// contact.component.ts
contactMethods = [...]    // Actualiza tus datos de contacto
```

### 2. Colores y Tema

Edita las variables en `src/styles.scss`:

```scss
:root {
  --color-bg: #0a0a0a;           // Fondo
  --color-primary: #ffff00;       // Amarillo eléctrico
  --color-secondary: #ff00ff;     // Magenta
  --color-accent: #00ffff;        // Cyan
  // ... más colores
}
```

### 3. CV (Curriculum)

1. Coloca tu PDF en `src/assets/cv.pdf`
2. El botón de descarga ya está configurado

### 4. Tipografía

Para cambiar las fuentes, edita `src/index.html`:

```html
<!-- Reemplaza con tus Google Fonts preferidas -->
<link href="https://fonts.googleapis.com/css2?family=Tu-Font" rel="stylesheet">
```

Luego actualiza las variables en `src/styles.scss`:

```scss
--font-display: 'Tu-Font-Display', sans-serif;
--font-mono: 'Tu-Font-Mono', monospace;
--font-body: 'Tu-Font-Body', sans-serif;
```

## 📁 Estructura del Proyecto

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── background-effects/  # Efectos de fondo animados
│   │   │   ├── header/              # Navegación principal
│   │   │   ├── hero/                # Sección de bienvenida
│   │   │   ├── about/               # Sobre mí + expertise
│   │   │   ├── skills/              # Stack tecnológico
│   │   │   ├── projects/            # Portafolio de trabajos
│   │   │   ├── contact/             # Información de contacto
│   │   │   └── footer/              # Pie de página
│   │   ├── app.component.*
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/                      # Archivos estáticos (CV, imágenes)
│   ├── index.html                   # HTML principal
│   ├── main.ts                      # Punto de entrada
│   └── styles.scss                  # Estilos globales
├── angular.json                     # Configuración Angular
├── package.json                     # Dependencias
├── tsconfig.json                    # Configuración TypeScript
└── README.md
```

## 🎨 Características de Animación

- **Glitch Effect**: Texto principal con efecto glitch
- **Typing Animation**: Título con efecto de máquina de escribir
- **Scan Line**: Línea CRT que recorre la pantalla
- **Floating Shapes**: Formas geométricas flotantes brutales
- **Diagonal Slide-in**: Animaciones de entrada en diagonal
- **Hover Effects**: Transformaciones dinámicas en todos los elementos
- **Pulse Indicators**: Puntos de estado con animación pulse
- **Border Transitions**: Bordes que cambian de color
- **Shadow Shifts**: Sombras brutales que se mueven al hover

## 🌐 Despliegue

### Netlify
```bash
npm run build
# Arrastra la carpeta dist/portfolio-angular a Netlify
```

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
```bash
ng build --base-href=/nombre-repo/
# Sube dist/ a la rama gh-pages
```

### Firebase
```bash
npm install -g firebase-tools
firebase init
firebase deploy
```

## 🎯 Características Técnicas

- **Responsive Design**: Adaptable a móviles, tablets y desktop
- **Scroll Detection**: Navegación activa basada en scroll
- **Lazy Loading**: Carga optimizada de componentes
- **Performance**: Animaciones CSS nativas para mejor rendimiento
- **Accessibility**: Estructura semántica HTML5
- **SEO-Friendly**: Meta tags y estructura adecuada
- **TypeScript Strict**: Tipado fuerte para mayor robustez

## 🔍 Optimización

El proyecto incluye:
- **Tree Shaking**: Eliminación de código no utilizado
- **Minificación**: CSS y JS comprimidos en producción
- **Lazy Loading**: Carga bajo demanda
- **AOT Compilation**: Compilación ahead-of-time
- **Source Maps**: Para debugging en desarrollo

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## 🤝 Contribuciones

Este es un proyecto de portafolio personal. Siéntete libre de:
- Usarlo como template
- Adaptarlo a tu estilo
- Aprender de él
- Compartirlo

## 📄 Licencia

Uso libre para proyectos personales y comerciales.

## 💡 Tips de Personalización

1. **Cambia los colores** para que coincidan con tu marca personal
2. **Ajusta las animaciones** según tu preferencia (más sutiles o más dramáticas)
3. **Modifica el layout** para enfatizar tus fortalezas
4. **Agrega secciones** como certificaciones, educación, o blog
5. **Personaliza las fuentes** para reflejar tu estilo único

## 🐛 Troubleshooting

**Error: ng not found**
```bash
npm install -g @angular/cli
```

**Puerto ocupado**
```bash
ng serve --port 4201
```

**Problemas con node_modules**
```bash
rm -rf node_modules package-lock.json
npm install
```

## 📧 Soporte

Para preguntas o problemas, revisa la documentación de Angular: https://angular.io/docs

---

**Desarrollado con ❤️ usando Angular y diseño Neo-Brutalist**
