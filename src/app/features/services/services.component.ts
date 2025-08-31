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
  cardPositions = new Map<string, {top: number, left: number, width: number}>();

  services: Service[] = [
    {
      id: 'auditoria-express',
      title: 'Auditoría Express de Redes + Workshop (2 h)',
      description: 'Diagnóstico accionable de tu presencia digital (contenido, bio, highlights, pauta, SEO local si aplica) + plan de mejoras inmediatas.',
      icon: '🔍',
      features: [
        'Análisis completo de presencia digital',
        'Diagnóstico de contenido actual',
        'Revisión de biografías y highlights',
        'Evaluación de pauta publicitaria',
        'SEO local cuando aplique',
        'Plan de mejoras inmediatas',
        'Workshop práctico de 2 horas',
        'Recomendaciones accionables'
      ],
      price: 'A cotizar'
    },
    {
      id: 'consultoria-marca-personal',
      title: 'Consultoría de Marca Personal',
      description: 'Definición de identidad, propuesta de valor, tono, pilares de contenido y playbook para LinkedIn/Instagram.',
      icon: '👤',
      features: [
        'Definición de identidad personal',
        'Desarrollo de propuesta de valor',
        'Definición de tono de comunicación',
        'Pilares de contenido personalizados',
        'Playbook para LinkedIn',
        'Playbook para Instagram',
        'Estrategia de posicionamiento',
        'Guidelines de marca personal'
      ],
      price: 'A cotizar'
    },
    {
      id: 'consultoria-marketing-externa',
      title: 'Consultoría Externa de Marketing',
      description: 'Estrategia integral por objetivos: calendario, campañas, colaboraciones con influencers/afiliados y seguimiento por OKRs/KPIs.',
      icon: '📈',
      features: [
        'Estrategia integral por objetivos',
        'Calendario de contenidos estratégico',
        'Diseño de campañas efectivas',
        'Colaboraciones con influencers',
        'Programas de afiliados',
        'Definición de OKRs',
        'Seguimiento de KPIs',
        'Reportes y optimización'
      ],
      price: 'A cotizar'
    },
    {
      id: 'branding-comunicacion',
      title: 'Branding & Comunicación',
      description: 'Storytelling, reposicionamiento, lanzamientos, guidelines de estilo y mensajes.',
      icon: '✨',
      features: [
        'Desarrollo de storytelling',
        'Estrategias de reposicionamiento',
        'Planes de lanzamiento',
        'Guidelines de estilo',
        'Arquitectura de mensajes',
        'Identidad visual aplicada',
        'Tono de voz consistente',
        'Narrativa de marca'
      ],
      price: 'A cotizar'
    },
    {
      id: 'capacitaciones-workshops',
      title: 'Capacitaciones & Workshops',
      description: 'Talleres a medida para equipos: contenido que rinde, buenas prácticas, flujo de trabajo y herramientas (Notion/Canva/IA).',
      icon: '🎓',
      features: [
        'Talleres personalizados para equipos',
        'Contenido que genera resultados',
        'Implementación de buenas prácticas',
        'Optimización de flujo de trabajo',
        'Capacitación en Notion',
        'Capacitación en Canva',
        'Integración de herramientas IA',
        'Metodologías de trabajo eficientes'
      ],
      price: 'A cotizar'
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
    
    // Z-index elevado cuando está expandida
    if (isExpanded) {
      classes += 'z-50 ';
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
    this.scrollToContact();
  }

  selectPlan(plan: ServicePlan): void {
    this.selectedServicePlan.set(plan);
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
