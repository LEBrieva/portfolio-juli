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
  icon: string;
  year: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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
      title: 'Premio Marketing Excellence',
      description: 'Reconocimiento por la mejor campaña digital del año en la categoría entretenimiento.',
      icon: '🏆',
      year: '2023'
    },
    {
      title: 'Festival de Cine Independiente',
      description: 'Mejor dirección de arte en cortometraje documental "Voces Urbanas".',
      icon: '🎬',
      year: '2022'
    },
    {
      title: 'Certificación Google Ads',
      description: 'Certificación avanzada en Google Ads y Analytics para marketing digital.',
      icon: '📜',
      year: '2021'
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
}
