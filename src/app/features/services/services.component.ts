import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { I18nService } from '../../services/i18n.service';
import { Service } from '../../shared/interfaces/common.interfaces';

interface ServicePlan {
  name: string;
  price: string;
  duration: string;
  description: string;
  features: string[];
  popular?: boolean;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  expandedService = signal<string | null>(null);
  hoveredService = signal<string | null>(null);
  selectedServicePlan = signal<ServicePlan | null>(null);

  services: Service[] = [
    {
      id: 'marketing-digital',
      title: 'Marketing Digital Integral',
      description: 'Estrategias completas de marketing digital para potenciar tu presencia online.',
      icon: '📊',
      features: [
        'Análisis de mercado y competencia',
        'Estrategia de contenidos personalizada',
        'Gestión de redes sociales',
        'Campañas publicitarias (Google Ads, Facebook Ads)',
        'Email marketing automation',
        'SEO y optimización web',
        'Analytics y reportes mensuales',
        'Consultoría estratégica continua'
      ],
      price: 'Desde $800'
    },
    {
      id: 'produccion-audiovisual',
      title: 'Producción Audiovisual',
      description: 'Creación de contenido audiovisual profesional para tus proyectos.',
      icon: '🎬',
      features: [
        'Videos promocionales y comerciales',
        'Documentales corporativos',
        'Contenido para redes sociales',
        'Grabación y edición profesional',
        'Motion graphics y animación',
        'Color grading y post-producción',
        'Guión y dirección creativa',
        'Entrega en múltiples formatos'
      ],
      price: 'Desde $1,200'
    },
    {
      id: 'fotografia-profesional',
      title: 'Fotografía Profesional',
      description: 'Sesiones fotográficas de alta calidad para productos, retratos y eventos.',
      icon: '📸',
      features: [
        'Fotografía de producto',
        'Retratos corporativos',
        'Fotografía de eventos',
        'Sesiones en estudio y exteriores',
        'Retoque digital profesional',
        'Entrega en alta resolución',
        'Derechos de uso comercial',
        'Galería online privada'
      ],
      price: 'Desde $400'
    },
    {
      id: 'branding-identidad',
      title: 'Branding e Identidad Visual',
      description: 'Desarrollo de identidad visual completa para marcas que quieren destacar.',
      icon: '🎨',
      features: [
        'Investigación y análisis de marca',
        'Diseño de logotipo y variaciones',
        'Paleta de colores y tipografías',
        'Manual de identidad visual',
        'Aplicaciones en papelería',
        'Diseño para redes sociales',
        'Mockups y presentaciones',
        'Archivos fuente y vectoriales'
      ],
      price: 'Desde $600'
    },
    {
      id: 'consultoria-estrategica',
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento experto para optimizar tu estrategia de marketing y comunicación.',
      icon: '💡',
      features: [
        'Auditoría de marketing actual',
        'Análisis de competencia',
        'Definición de buyer personas',
        'Plan estratégico personalizado',
        'Optimización de procesos',
        'Training y capacitación',
        'Seguimiento y métricas KPI',
        'Sesiones mensuales de revisión'
      ],
      price: 'Desde $300'
    },
    {
      id: 'social-media',
      title: 'Gestión de Redes Sociales',
      description: 'Administración completa de tus redes sociales con contenido de calidad.',
      icon: '📱',
      features: [
        'Estrategia de contenidos',
        'Creación de posts diarios',
        'Diseño gráfico personalizado',
        'Programación automática',
        'Interacción con seguidores',
        'Stories y contenido dinámico',
        'Análisis de métricas',
        'Reportes mensuales detallados'
      ],
      price: 'Desde $500'
    }
  ];

  servicePlans: ServicePlan[] = [
    {
      name: 'Starter',
      price: '$500',
      duration: 'Proyecto único',
      description: 'Perfecto para pequeños proyectos o emprendimientos que están comenzando.',
      features: [
        '1 servicio a elección',
        'Consulta inicial gratuita',
        '2 rondas de revisión',
        'Entrega en 2 semanas',
        'Soporte por email',
        'Archivos finales'
      ]
    },
    {
      name: 'Professional',
      price: '$1,200',
      duration: 'Mensual',
      description: 'Ideal para empresas que buscan crecimiento constante y resultados medibles.',
      features: [
        '2-3 servicios combinados',
        'Estrategia personalizada',
        'Revisiones ilimitadas',
        'Entrega semanal',
        'Soporte prioritario',
        'Reportes mensuales',
        'Consultoría incluida',
        'Contenido adicional'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,500',
      duration: 'Mensual',
      description: 'Solución completa para empresas que necesitan un partner estratégico integral.',
      features: [
        'Todos los servicios incluidos',
        'Equipo dedicado',
        'Revisiones ilimitadas',
        'Entrega diaria',
        'Soporte 24/7',
        'Reportes semanales',
        'Reuniones estratégicas',
        'Contenido premium',
        'Capacitación del equipo'
      ]
    }
  ];

  processSteps = [
    {
      title: 'Descubrimiento',
      description: 'Analizamos tus objetivos, audiencia y competencia para crear una estrategia sólida.',
      icon: '🔍'
    },
    {
      title: 'Planificación',
      description: 'Desarrollamos un plan detallado con timeline, recursos y métricas de éxito.',
      icon: '📋'
    },
    {
      title: 'Ejecución',
      description: 'Implementamos la estrategia con precisión, manteniendo comunicación constante.',
      icon: '🚀'
    },
    {
      title: 'Optimización',
      description: 'Monitoreamos resultados y optimizamos continuamente para maximizar el ROI.',
      icon: '📈'
    }
  ];

  constructor(private i18nService: I18nService) {}

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  toggleServiceDetails(serviceId: string): void {
    this.expandedService.set(
      this.expandedService() === serviceId ? null : serviceId
    );
  }

  setHoveredService(serviceId: string | null): void {
    this.hoveredService.set(serviceId);
  }

  getServiceCardClass(serviceId: string): string {
    const isHovered = this.hoveredService() === serviceId;
    const isExpanded = this.expandedService() === serviceId;
    
    let classes = 'hover:shadow-2xl hover:-translate-y-2 ';
    
    if (isHovered || isExpanded) {
      classes += 'border-primary-600 shadow-2xl -translate-y-2 ';
    } else {
      classes += 'border-transparent ';
    }
    
    return classes;
  }

  getIconClass(serviceId: string): string {
    const isHovered = this.hoveredService() === serviceId;
    const isExpanded = this.expandedService() === serviceId;
    
    if (isHovered || isExpanded) {
      return 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white scale-110';
    }
    
    return 'bg-gray-100 text-gray-600';
  }

  getPlanCardClass(plan: ServicePlan): string {
    if (plan.popular) {
      return 'shadow-2xl border-2 border-primary-600 scale-105';
    }
    return 'shadow-lg border border-gray-200 hover:shadow-xl hover:scale-105';
  }

  selectService(service: Service): void {
    // Simulate service selection - could open a modal or redirect to contact
    console.log('Service selected:', service.title);
    this.scrollToContact();
  }

  selectPlan(plan: ServicePlan): void {
    this.selectedServicePlan.set(plan);
    console.log('Plan selected:', plan.name);
    this.scrollToContact();
  }

  scrollToContact(): void {
    const element = document.getElementById('contact');
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  }
}
