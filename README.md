# 🎨 JuliPortfolio - Portfolio Artístico

Un portfolio moderno y responsive desarrollado en Angular 19 con TailwindCSS, diseñado para mostrar trabajos artísticos de manera elegante y profesional.

## 🚀 Características

- ✨ **Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- 📱 **Responsive**: Adaptado para todos los dispositivos (móvil, tablet, desktop)
- 🌍 **Multiidioma**: Soporte para Español, Inglés y Portugués
- 🎯 **Navegación Suave**: Scroll suave entre secciones
- 📧 **Formulario de Contacto**: Sistema de contacto integrado
- 🎨 **Galería de Trabajos**: Showcase interactivo de proyectos
- ⚡ **Alto Rendimiento**: Optimizado para velocidad y SEO

## 🛠️ Tecnologías

- **Framework**: Angular 19.2.0
- **Estilos**: TailwindCSS 3.4.17
- **Lenguaje**: TypeScript 5.7.2
- **Formularios**: Angular Reactive Forms
- **Iconos**: Emojis nativos y símbolos Unicode
- **Build**: Angular CLI 19.2.4

## 📁 Arquitectura del Proyecto

El proyecto sigue una **arquitectura basada en características (feature-based architecture)** que es una práctica recomendada para aplicaciones Angular escalables:

```
src/app/
├── 🏗️ core/                    # Servicios singleton, guards, interceptors
├── 📦 shared/                  # Componentes y utilidades reutilizables
│   ├── interfaces/            # Interfaces TypeScript compartidas
│   │   └── common.interfaces.ts
│   └── ui/                    # Componentes UI reutilizables
│       ├── button/            # Componente de botón
│       │   ├── button.component.ts
│       │   ├── button.component.html
│       │   └── button.component.css
│       └── card/              # Componente de tarjeta
│           ├── card.component.ts
│           ├── card.component.html
│           └── card.component.css
├── 🧩 components/              # Componentes de layout
│   ├── header/                # Barra de navegación
│   └── footer/                # Pie de página
├── 🎯 features/                # Características del negocio (páginas)
│   ├── home/                  # Página principal con hero section
│   ├── about/                 # Sección sobre el artista
│   ├── portfolio/             # Galería de trabajos
│   ├── services/              # Servicios ofrecidos
│   ├── testimonials/          # Testimonios de clientes
│   └── contact/               # Formulario de contacto
├── 🔧 services/               # Servicios de aplicación
│   └── i18n.service.ts        # Servicio de internacionalización
└── 📄 models/                 # Modelos de datos
```

### 🏗️ Explicación de la Arquitectura

#### **Features vs Components**

- **📁 Features**: Representan **funcionalidades completas** del negocio (páginas principales)
- **📁 Components**: Componentes **reutilizables** de layout (header, footer, sidebar)
- **📁 Shared/UI**: Componentes **reutilizables** sin lógica de negocio específica

#### **Ventajas de esta estructura**

1. **🔍 Fácil de encontrar**: Cada funcionalidad está en su lugar específico
2. **🔧 Mantenible**: Cambios en una feature no afectan otras
3. **🚀 Escalable**: Fácil agregar nuevas características
4. **👥 Trabajo en equipo**: Diferentes desarrolladores pueden trabajar en features separadas
5. **📦 Lazy Loading**: Cada feature puede cargarse bajo demanda

## 🚀 Instalación y Configuración

### Prerrequisitos

- Node.js 18+ 
- npm 8+
- Angular CLI 19+

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd artistic-portfolio

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

## 📜 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo en puerto 4200
npm run watch          # Build en modo watch para desarrollo

# Construcción
npm run build          # Build para producción

# Testing
npm test              # Ejecuta tests unitarios con Karma

# Angular CLI
npm run ng            # Acceso directo a Angular CLI
```

## 🌍 Internacionalización (i18n)

El proyecto incluye soporte multiidioma implementado con un servicio personalizado:

### Idiomas Soportados
- 🇪🇸 **Español** (por defecto)
- 🇺🇸 **Inglés**
- 🇧🇷 **Portugués**

### Uso del Servicio i18n

```typescript
// En componentes
constructor(private i18nService: I18nService) {}

// Traducir textos
translate(key: string): string {
  return this.i18nService.translate(key);
}

// Cambiar idioma
this.i18nService.setLanguage('en');
```

## 🎨 Componentes UI

### ButtonComponent

Componente de botón reutilizable con múltiples variantes y tamaños.

```typescript
// Variantes disponibles
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

// Uso
<app-button 
  variant="primary" 
  size="lg" 
  [loading]="isLoading"
  (clicked)="handleClick()">
  Texto del botón
</app-button>
```

### CardComponent

Componente de tarjeta flexible para mostrar contenido.

```typescript
// Uso
<app-card 
  title="Título"
  subtitle="Subtítulo"
  [tags]="['tag1', 'tag2']"
  variant="elevated">
  <div slot="content">Contenido personalizado</div>
  <div slot="actions">
    <app-button>Acción</app-button>
  </div>
</app-card>
```

## 📱 Secciones del Portfolio

### 🏠 Home
- Hero section con información principal
- Enlaces a redes sociales
- Navegación rápida a secciones

### 👤 About
- Información personal del artista
- Experiencia y habilidades
- Historia profesional

### 🎨 Portfolio
- Galería de trabajos
- Filtrado por categorías
- Vista detallada de proyectos

### 🛠️ Services
- Servicios ofrecidos
- Precios y características
- Call-to-action

### 💬 Testimonials
- Testimonios de clientes
- Sistema de calificaciones
- Información de contacto de referencias

### 📧 Contact
- Formulario de contacto reactivo
- Validaciones en tiempo real
- Información de contacto

## 🎯 Mejores Prácticas Implementadas

### 📋 Código
- **Standalone Components**: Uso de componentes standalone de Angular
- **Reactive Forms**: Formularios reactivos con validaciones
- **TypeScript Strict**: Configuración estricta de TypeScript
- **Interfaces**: Tipado fuerte con interfaces TypeScript

### 🎨 Estilos
- **TailwindCSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Consistent Spacing**: Sistema de espaciado consistente
- **Color Palette**: Paleta de colores definida

### 🏗️ Arquitectura
- **Feature-based Structure**: Organización por características
- **Separation of Concerns**: Separación clara de responsabilidades
- **Reusable Components**: Componentes reutilizables
- **Service Layer**: Capa de servicios para lógica de negocio

## 🔧 Configuración de TailwindCSS

El proyecto incluye configuración personalizada de TailwindCSS con:

- **Custom Colors**: Colores primarios y secundarios
- **Typography Plugin**: Mejores estilos tipográficos
- **Forms Plugin**: Estilos mejorados para formularios
- **Custom Utilities**: Utilidades personalizadas

## 📈 Rendimiento

- **Lazy Loading**: Carga diferida de módulos
- **OnPush Strategy**: Estrategia de detección de cambios optimizada
- **Tree Shaking**: Eliminación de código no utilizado
- **Minification**: Minificación de assets en producción

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Juli Martínez**
- Portfolio: [juliportfolio.com](https://juliportfolio.com)
- LinkedIn: [linkedin.com/in/julimartinez](https://linkedin.com/in/julimartinez)
- Instagram: [@julimartinez_](https://instagram.com/julimartinez_)
- Behance: [behance.net/julimartinez](https://behance.net/julimartinez)

---

⭐ **¡Dale una estrella si te gusta este proyecto!**