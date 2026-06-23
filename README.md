# Xhala Pilates y Osteopatía

Sitio web profesional y premium para el centro de salud y bienestar Xhala Pilates y Osteopatía. Desarrollado con las últimas tecnologías web y optimizado para SEO, accesibilidad y rendimiento.

## 🚀 Tecnologías

- **Next.js 16** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS 4** - Framework CSS utility-first
- **Framer Motion** - Animaciones modernas
- **React 19** - Biblioteca UI

## ✨ Características

### Diseño
- Minimalismo premium inspirado en Apple, Stripe, Linear
- Diseño responsive (Mobile First)
- Tipografía moderna con Geist Sans
- Paleta de colores corporativa (#96e3d8, #000000, #FFFFFF)
- Microinteracciones elegantes
- Animaciones suaves y performantes

### SEO Avanzado
- Metadata dinámica optimizada
- Structured Data (JSON-LD) para:
  - Organization Schema
  - Local Business Schema
  - WebPage Schema
  - Breadcrumb Schema
  - FAQ Schema
- Sitemap.xml automático
- Robots.txt configurado
- Open Graph y Twitter Cards
- Keywords optimizadas

### Accesibilidad (WCAG 2.2 AA)
- Navegación por teclado
- Skip link para contenido principal
- ARIA labels apropiados
- Contraste de colores correcto
- Focus visible
- Lectores de pantalla compatibles

### Performance
- Optimizado para Core Web Vitals
- Lazy loading de componentes
- Optimización de fuentes
- Code splitting automático
- Imágenes optimizadas

### Componentes
- Sistema de componentes reutilizables
- Button con múltiples variantes
- Container responsive
- Section con variantes
- Heading animado
- Navigation con menú móvil
- Footer completo

### Secciones
- Hero con animaciones
- Beneficios con grid
- Servicios detallados
- Proceso de trabajo
- Testimonios
- FAQ con acordeón
- Contacto con formulario

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd xhala_web
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 🛠️ Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea versión de producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router
│   ├── layout.tsx         # Layout principal con metadata
│   ├── page.tsx           # Página home
│   ├── globals.css        # Estilos globales
│   ├── sitemap.ts         # Sitemap automático
│   └── robots.ts          # Robots.txt
├── components/
│   ├── layout/            # Componentes de layout
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── sections/          # Secciones de la página
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx
│   │   └── Contact.tsx
│   ├── ui/                # Componentes UI base
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Section.tsx
│   │   └── Heading.tsx
│   └── seo/               # Componentes SEO
│       └── JsonLd.tsx
├── lib/                   # Utilidades
│   ├── utils.ts           # Funciones helper
│   ├── metadata.ts        # Generación de metadata
│   └── structured-data.ts # Schemas JSON-LD
├── config/                # Configuración
│   └── site.ts            # Configuración del sitio
└── types/                 # TypeScript types
    └── index.ts
```

## 🎨 Personalización

### Colores
Edita `src/app/globals.css` para personalizar los colores:
```css
:root {
  --primary: #96e3d8;
  --primary-dark: #7ac9be;
  --primary-light: #b2efe6;
}
```

### Configuración del Sitio
Edita `src/config/site.ts` para actualizar:
- Nombre del sitio
- Descripción
- URLs
- Información de contacto
- Keywords SEO

## 🚀 Despliegue

### Vercel (Recomendado)
1. Push el código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y configurará todo

### Otros Proveedores
El proyecto es compatible con cualquier plataforma que soporte Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📊 SEO

El sitio incluye optimización SEO completa:
- Metadata dinámica en cada página
- Structured Data para rich snippets
- Sitemap.xml automático
- Robots.txt configurado
- Open Graph para redes sociales
- Twitter Cards

## ♿ Accesibilidad

Cumple con WCAG 2.2 AA:
- Navegación por teclado completa
- Skip link para usuarios de lectores de pantalla
- Contraste de colores WCAG compliant
- ARIA labels apropiados
- Focus visible en elementos interactivos

## 📈 Performance

Optimizado para Core Web Vitals:
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de Xhala Pilates y Osteopatía.

## 📞 Contacto

Para más información, contacta con:
- Email: info@xhalapilates.com
- Teléfono: +34 900 000 000
