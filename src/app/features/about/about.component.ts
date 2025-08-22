import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/ui/card/card.component';
import { I18nService } from '../../services/i18n.service';

interface Skill {
  name: string;
  level: number;
  icon: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: string;
}

interface Achievement {
  title: string;
  description: string;
  year: string;
  image?: string;
}

interface JourneySlide {
  titleKey: string;
  contentKey: string;
  icon?: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnDestroy {
  // Carrusel properties
  currentSlide = 0;
  visibleSlides = 3;
  isMobile = false;
  
  // Journey Carousel properties
  currentJourneySlide = 0;
  
  // Touch/Swipe properties
  private touchStartX = 0;
  private touchEndX = 0;
  private minSwipeDistance = 50;
  
  personalInfo = [
    { icon: '👩', label: 'Nombre', value: 'Julieta Rojas' },
    { icon: '📍', label: 'Ubicación', value: 'Rio de Janeiro, Brasil' },
    { icon: '🎓', label: 'Educación', value: 'Marketing Audiovisual' },
    { icon: '💼', label: 'Experiencia', value: '8+ años en Marketing' },
    { icon: '📧', label: 'Email', value: 'julirojas.mkt@gmail.com' }
  ];

  // Professional Journey Slides
  journeySlides: JourneySlide[] = [
    {
      titleKey: 'about.journey.slide1.title',
      contentKey: 'about.journey.slide1.content'
    },
    {
      titleKey: 'about.journey.slide2.title',
      contentKey: 'about.journey.slide2.content'
    },
    {
      titleKey: 'about.journey.slide3.title',
      contentKey: 'about.journey.slide3.content'
    },
    {
      titleKey: 'about.journey.slide4.title',
      contentKey: 'about.journey.slide4.content'
    }
  ];

  skills: Skill[] = [
    { name: 'Adobe Creative Suite', level: 50, icon: '🎨' },
    { name: 'Dirección de Arte', level: 80, icon: '👩🏼‍🎨' },
    { name: 'Marketing Digital', level: 70, icon: '💻' },
    { name: 'Producción Audiovisual', level: 70, icon: '🎬' },
    { name: 'Social Media Management', level: 80, icon: '📱' },
    { name: 'Estrategia de Contenidos', level: 100, icon: '📝' },
    { name: 'Fotografía', level: 60, icon: '📸' }
  ];

  experiences: Experience[] = [
    {
      title: 'Consultora Externa',
      company: 'Freelance - Brasil',
      period: '2024 - Presente',
      description: 'Consultoría en marketing digital y marca personal para empresas y profesionales. Diseño de estrategias de comunicación y narrativas auténticas.',
      icon: '🌎'
    },
    {
      title: 'Líder de Marketing Digital',
      company: 'Rusty Argentina',
      period: '2022 - 2024',
      description: 'Liderazgo de campañas omnicanal, lanzamientos de productos y colaboraciones con influencers. Generación de resultados medibles y engagement con audiencias.',
      icon: '🏄'
    },
    {
      title: 'Estratega de Marca',
      company: 'Vulk Clothing',
      period: '2020 - 2022',
      description: 'Desarrollo de identidad de marca, estrategias de contenido y gestión de redes sociales para posicionamiento en el mercado de moda urbana.',
      icon: '👕'
    },
    {
      title: 'Community Manager',
      company: "Local's Only",
      period: '2018 - 2020',
      description: 'Creación de contenido audiovisual, gestión de comunidades online y desarrollo de campañas creativas para marcas locales.',
      icon: '📱'
    },
    {
      title: 'Fotógrafa y Artista Visual',
      company: 'Independiente',
      period: '2016 - 2018',
      description: 'Inicio de mi carrera en el mundo del arte y la fotografía, desarrollando proyectos creativos y colaboraciones artísticas.',
      icon: '📸'
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Community Manager',
      description: 'Certificación en Community Manager.',
      year: '2023',
      image: 'diplomas/community-manager.jpg'
    },
    {
      title: 'Escritura Estrategica RRSS',
      description: 'Certificación en Escritura Estrategica RRSS.',
      year: '2023',
      image: 'diplomas/escritura-estrategica-rrss.jpg'
    },
    {
      title: 'Liderazgo para Equipos Creativos',
      description: 'Certificación en Liderazgo para Equipos Creativos.',
      year: '2023',
      image: 'diplomas/liderazgo-para-equipos-creativos.jpg'
    },
    {
      title: 'Estrategias de Branding',
      description: 'Certificación en Estrategias de Branding.',
      year: '2023',
      image: 'diplomas/estrategias-branding-empresas.jpg'
    },
    {
      title: 'Fotografía',
      description: 'Certificación en Fotografía.',
      year: '2019',
      image: 'diplomas/fotografia-cruceros.jpeg'
    },
    {
      title: 'Tecnicatura en Artes Audiovisuales',
      description: 'Tecnicatura en Artes Audiovisuales.',
      year: '2017',
      image: 'diplomas/tecnicatura-artes-audiovisuales.jpg'
    }
  ];

  stats = [
    { value: '150+', label: 'Proyectos Completados' },
    { value: '50+', label: 'Clientes Satisfechos' },
    { value: '8', label: 'Años de Experiencia' },
    { value: '15', label: 'Premios Obtenidos' }
  ];

  constructor(private i18nService: I18nService) {
    this.checkScreenSize();
    // Listen to window resize events
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => this.checkScreenSize());
    }
    // Journey carousel ready
  }

  ngOnDestroy(): void {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => this.checkScreenSize());
    }
    // Journey carousel cleanup
  }

  checkScreenSize(): void {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 768;
      this.visibleSlides = this.isMobile ? 1 : 3;
    }
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  // Carrusel methods
  nextSlide(): void {
    // Mover de 1 en 1: posición 0 -> 1 -> 2 -> 3 -> 0 -> 1...
    this.currentSlide = (this.currentSlide + 1) % this.achievements.length;
  }

  prevSlide(): void {
    // Mover hacia atrás de 1 en 1: posición 3 -> 2 -> 1 -> 0 -> 3 -> 2...
    this.currentSlide = this.currentSlide === 0 ? this.achievements.length - 1 : this.currentSlide - 1;
  }

  getTransformValue(): string {
    // Cada slide se mueve 33.33% (100% / 3 visibles)
    return `translateX(-${(this.currentSlide * 100) / this.visibleSlides}%)`;
  }

  getVisibleAchievements(): Achievement[] {
    // Crear array circular para mostrar elementos según visibleSlides
    const result: Achievement[] = [];
    for (let i = 0; i < this.visibleSlides; i++) {
      const index = (this.currentSlide + i) % this.achievements.length;
      result.push(this.achievements[index]);
    }
    return result;
  }

  getBullets(): number[] {
    // En móvil: tantos bullets como certificados totales
    // En escritorio: tantos bullets como "grupos" de 3 (pero solo será el total/3)
    if (this.isMobile) {
      return Array.from({ length: this.achievements.length }, (_, i) => i);
    } else {
      // En escritorio mantener la lógica original
      const totalGroups = Math.ceil(this.achievements.length / this.visibleSlides);
      return Array.from({ length: totalGroups }, (_, i) => i);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  // Touch/Swipe event handlers
  onTouchStart(event: TouchEvent): void {
    if (!this.isMobile) return;
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent): void {
    if (!this.isMobile) return;
    // Prevent default to avoid scrolling
    event.preventDefault();
  }

  onTouchEnd(event: TouchEvent): void {
    if (!this.isMobile) return;
    this.touchEndX = event.changedTouches[0].clientX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    const swipeDistance = this.touchStartX - this.touchEndX;
    
    // Swipe left (next slide)
    if (swipeDistance > this.minSwipeDistance) {
      this.nextSlide();
    }
    // Swipe right (previous slide)
    else if (swipeDistance < -this.minSwipeDistance) {
      this.prevSlide();
    }
  }

  // Journey Carousel Methods
  nextJourneySlide(): void {
    this.currentJourneySlide = (this.currentJourneySlide + 1) % this.journeySlides.length;
  }

  prevJourneySlide(): void {
    this.currentJourneySlide = this.currentJourneySlide === 0 ? this.journeySlides.length - 1 : this.currentJourneySlide - 1;
  }

  goToJourneySlide(index: number): void {
    this.currentJourneySlide = index;
  }
}
