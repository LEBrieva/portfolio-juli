import { Component } from '@angular/core';
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

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Carrusel properties
  currentSlide = 0;
  visibleSlides = 3;
  
  personalInfo = [
    { icon: '👩', label: 'Nombre', value: 'Julieta Cuadra Rojas' },
    { icon: '📍', label: 'Ubicación', value: 'Rio de Janeiro, Brasil' },
    { icon: '🎓', label: 'Educación', value: 'Marketing Audiovisual' },
    { icon: '💼', label: 'Experiencia', value: '7+ años en Marketing' },
    { icon: '📧', label: 'Email', value: 'julirojas.mkt@gmail.com' }
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
      title: 'Directora Creativa Senior',
      company: 'AgenciaCreativa Plus',
      period: '2021 - Presente',
      description: 'Liderazgo de equipo creativo, desarrollo de estrategias de marca y producción de contenido audiovisual para clientes premium.',
      icon: '🚀'
    },
    {
      title: 'Especialista en Marketing Digital',
      company: 'MediaGroup Argentina',
      period: '2019 - 2021',
      description: 'Gestión integral de campañas digitales, creación de contenido multimedia y análisis de métricas para optimización.',
      icon: '💡'
    },
    {
      title: 'Productora Audiovisual',
      company: 'Estudios Creativos SRL',
      period: '2017 - 2019',
      description: 'Producción de videos comerciales, documentales corporativos y contenido para redes sociales.',
      icon: '🎥'
    },
    {
      title: 'Asistente de Producción',
      company: 'Canal Visual TV',
      period: '2016 - 2017',
      description: 'Apoyo en producciones televisivas, manejo de equipos técnicos y coordinación logística.',
      icon: '📺'
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

  constructor(private i18nService: I18nService) {}

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
    // Crear array circular para mostrar siempre 3 elementos
    const result: Achievement[] = [];
    for (let i = 0; i < this.visibleSlides; i++) {
      const index = (this.currentSlide + i) % this.achievements.length;
      result.push(this.achievements[index]);
    }
    return result;
  }
}
