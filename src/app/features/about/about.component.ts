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
  labelTitle: string;
  description: string;
  year: string;
  image?: string;
}

interface JourneySlide {
  titleKey: string;
  contentKey: string;
  icon?: string;
}

// Nueva estructura para habilidades profesionales
interface ProfessionalSkill {
  name: string;
  icon: string;
}

interface SkillCategory {
  titleKey: string;
  descriptionKey: string;
  icon: string;
  skills: ProfessionalSkill[];
}

interface ToolSubcategory {
  name: string;
  tools: ProfessionalSkill[];
}

interface CreativeSkill {
  name: string;
  level: string;
  icon: string;
}

interface SocialNetwork {
  platform: string;
  level: string;
  description: string;
  icon: string;
  color: string;
}

interface Language {
  name: string;
  level: string;
  flag: string;
  description?: string;
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
  
  // Accordion states
  professionalSkillsOpen = false;
  toolsOpen = false;
  creativeOpen = false;
  socialOpen = false;
  languagesOpen = false;
  
  // Flip cards state for social networks
  flippedCards = new Set<number>();
  
  // Touch/Swipe properties
  private touchStartX = 0;
  private touchEndX = 0;
  private minSwipeDistance = 50;
  
  // Professional Journey Slides (mantenido)
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

  // Nueva estructura de habilidades profesionales
  professionalSkills: SkillCategory = {
    titleKey: 'about.skills.professional.title',
    descriptionKey: 'about.skills.professional.description',
    icon: '🧠',
    skills: [
      { name: 'Estrategia de Redes Sociales', icon: '📊' },
      { name: 'Estrategia de Contenido & Copywriting Creativo', icon: '📝' },
      { name: 'Branding & Comunicación Estratégica', icon: '🏢' },
      { name: 'Marketing Omnicanal', icon: '🎯' },
      { name: 'Influencer Marketing & Programas de Afiliados', icon: '👑' },
      { name: 'SEO & SEO Local (Google Business Profile)', icon: '🔍' },
      { name: 'Liderazgo de equipos creativos', icon: '👥' },
      { name: 'Análisis de Mercado y Segmentación', icon: '📈' },
      { name: 'Gestión de Crisis y Planes de Contingencia', icon: '⚠️' },
      { name: 'Planificación Estratégica y Gestión de Proyectos', icon: '📋' },
      { name: 'Trabajo en equipo y colaboración ágil', icon: '🤝' },
      { name: 'Marca Personal (posicionamiento y narrativa)', icon: '💼' }
    ]
  };

  // Herramientas y Plataformas organizadas por subcategorías
  toolsSubcategories: ToolSubcategory[] = [
    {
      name: 'Gestión/Colaboración',
      tools: [
        { name: 'Notion', icon: '📝' },
        { name: 'Craft', icon: '📄' },
        { name: 'Basecamp', icon: '🏕️' },
        { name: 'Asana', icon: '📋' },
        { name: 'Google Workspace', icon: '📊' },
        { name: 'Google Calendar', icon: '📅' }
      ]
    },
    {
      name: 'Social & Negocio',
      tools: [
        { name: 'Meta Business Suite', icon: '📘' },
        { name: 'Google Business Profile', icon: '🏢' },
        { name: 'LinkedIn', icon: '💼' },
        { name: 'Instagram/Threads', icon: '📸' },
        { name: 'TikTok', icon: '🎵' },
        { name: 'Strava', icon: '🏃‍♀️' },
        { name: 'Shopify', icon: '🛒' }
      ]
    },
    {
      name: 'IA (co‑creación y productividad)',
      tools: [
        { name: 'ChatGPT (Plus)', icon: '🤖' },
        { name: 'Claude', icon: '🧠' },
        { name: 'Gamma', icon: '🎨' },
        { name: 'Canva AI', icon: '✨' }
      ]
    },
    {
      name: 'Edición & diseño rápido',
      tools: [
        { name: 'Canva (Pro)', icon: '🎨' },
        { name: 'CapCut', icon: '✂️' }
      ]
    }
  ];

  // Producción & Creatividad
  creativeSkills: CreativeSkill[] = [
    { name: 'Adobe Premiere', level: 'Intermedio-Avanzado', icon: '🎬' },
    { name: 'Lightroom', level: 'Avanzado', icon: '📸' },
    { name: 'Illustrator', level: 'Intermedio', icon: '🎨' },
    { name: 'Photoshop', level: 'Básico-Intermedio', icon: '🖼️' },
    { name: 'Producción multimedia', level: '', icon: '🎥' },
    { name: 'Fotografía', level: '', icon: '📷' },
    { name: 'Edición de video', level: '', icon: '🎞️' },
    { name: 'Redacción publicitaria', level: '', icon: '✍️' }
  ];

  // Experiencia en Redes Sociales
  socialNetworks: SocialNetwork[] = [
    {
      platform: 'Instagram / Facebook / Threads',
      level: 'Avanzado',
      description: 'Estrategia editorial, coordinación de paid con performance teams, optimización de contenido y formato (reels, UGC, colaboraciones)',
      icon: '📸',
      color: 'bg-pink-300'
    },
    {
      platform: 'LinkedIn',
      level: 'Avanzado',
      description: 'B2B, marca personal/corporativa, social selling, carruseles y thought leadership',
      icon: '💼',
      color: 'bg-blue-300'
    },
    {
      platform: 'Strava',
      level: 'Intermedio',
      description: 'Gestión de comunidad y contenidos de nicho para running',
      icon: '🏃‍♀️',
      color: 'bg-orange-300'
    },
    {
      platform: 'TikTok',
      level: 'Intermedio',
      description: 'Pruebas de formato, hooks y tendencias',
      icon: '🎵',
      color: 'bg-purple-300'
    },
    {
      platform: 'X (Twitter)',
      level: 'Básico',
      description: 'Monitoreo y comunicación puntual',
      icon: '🐦',
      color: 'bg-gray-300'
    }
  ];

  // Idiomas
  languages: Language[] = [
    { name: 'Español', level: 'Nativo', flag: '🇪🇸' },
    { name: 'Inglés', level: 'C1 – Avanzado', flag: '🇺🇸', description: 'fluido en entornos profesionales diarios' },
    { name: 'Portugués', level: 'Avanzado', flag: '🇧🇷', description: 'uso cotidiano, residencia en Brasil' },
    { name: 'Italiano', level: 'Básico', flag: '🇮🇹' },
    { name: 'Francés', level: 'Básico', flag: '🇫🇷' }
  ];

  achievements: Achievement[] = [
    {
      labelTitle: 'about.certifications.communityManager',
      description: 'about.certifications.communityManagerDescription',
      year: '2023',
      image: 'diplomas/community-manager.jpg'
    },
    {
      labelTitle: 'about.certifications.escrituraEstrategicaRrss',
      description: 'about.certifications.escrituraEstrategicaRrssDescription',
      year: '2023',
      image: 'diplomas/escritura-estrategica-rrss.jpg'
    },
    {
      labelTitle: 'about.certifications.liderazgoParaEquiposCreativos',
      description: 'about.certifications.liderazgoParaEquiposCreativosDescription',
      year: '2023',
      image: 'diplomas/liderazgo-para-equipos-creativos.jpg'
    },
    {
      labelTitle: 'about.certifications.estrategiasDeBranding',
      description: 'about.certifications.estrategiasDeBrandingDescription',
      year: '2023',
      image: 'diplomas/estrategias-branding-empresas.jpg'
    },
    {
      labelTitle: 'about.certifications.fotografia',
      description: 'about.certifications.fotografiaDescription',
      year: '2019',
      image: 'diplomas/fotografia-cruceros.jpeg'
    },
    {
      labelTitle: 'about.certifications.tecnicaturaEnArtesAudiovisuales',
      description: 'about.certifications.tecnicaturaEnArtesAudiovisualesDescription',
      year: '2017',
      image: 'diplomas/tecnicatura-artes-audiovisuales.jpg'
    }
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

  getLevelBadgeClass(level: string): string {
    if (level.includes('Avanzado')) return 'bg-green-100 text-green-800';
    if (level.includes('Intermedio')) return 'bg-blue-100 text-blue-800';
    if (level.includes('Básico')) return 'bg-gray-100 text-gray-800';
    if (level.includes('Nativo') || level.includes('C1')) return 'bg-purple-100 text-purple-800';
    return 'bg-gray-100 text-gray-800';
  }

  // Accordion toggle methods
  toggleProfessionalSkills(): void {
    this.professionalSkillsOpen = !this.professionalSkillsOpen;
  }

  toggleTools(): void {
    this.toolsOpen = !this.toolsOpen;
  }

  toggleCreative(): void {
    this.creativeOpen = !this.creativeOpen;
  }

  toggleSocial(): void {
    this.socialOpen = !this.socialOpen;
  }

  toggleLanguages(): void {
    this.languagesOpen = !this.languagesOpen;
  }

  // Flip card methods
  toggleFlipCard(index: number): void {
    if (this.flippedCards.has(index)) {
      this.flippedCards.delete(index);
    } else {
      this.flippedCards.add(index);
    }
  }

  isCardFlipped(index: number): boolean {
    return this.flippedCards.has(index);
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

  // Journey Carousel Touch/Swipe handlers
  private journeyTouchStartX = 0;
  private journeyTouchEndX = 0;

  onJourneyTouchStart(event: TouchEvent): void {
    this.journeyTouchStartX = event.touches[0].clientX;
  }

  onJourneyTouchMove(event: TouchEvent): void {
    // Prevent default to avoid scrolling
    event.preventDefault();
  }

  onJourneyTouchEnd(event: TouchEvent): void {
    this.journeyTouchEndX = event.changedTouches[0].clientX;
    this.handleJourneySwipe();
  }

  private handleJourneySwipe(): void {
    const swipeDistance = this.journeyTouchStartX - this.journeyTouchEndX;
    
    // Swipe left (next slide)
    if (swipeDistance > this.minSwipeDistance) {
      this.nextJourneySlide();
    }
    // Swipe right (previous slide)
    else if (swipeDistance < -this.minSwipeDistance) {
      this.prevJourneySlide();
    }
  }
}
