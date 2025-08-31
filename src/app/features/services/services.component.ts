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
      title: 'services.auditoria.title',
      description: 'services.auditoria.description',
      icon: '🔍',
      features: [
        'services.auditoria.feature1',
        'services.auditoria.feature2',
        'services.auditoria.feature3',
        'services.auditoria.feature4',
        'services.auditoria.feature5',
        'services.auditoria.feature6',
        'services.auditoria.feature7',
        'services.auditoria.feature8'
      ],
      price: 'services.price'
    },
    {
      id: 'consultoria-marca-personal',
      title: 'services.marca.title',
      description: 'services.marca.description',
      icon: '👤',
      features: [
        'services.marca.feature1',
        'services.marca.feature2',
        'services.marca.feature3',
        'services.marca.feature4',
        'services.marca.feature5',
        'services.marca.feature6',
        'services.marca.feature7',
        'services.marca.feature8'
      ],
      price: 'services.price'
    },
    {
      id: 'consultoria-marketing-externa',
      title: 'services.marketing.title',
      description: 'services.marketing.description',
      icon: '📈',
      features: [
        'services.marketing.feature1',
        'services.marketing.feature2',
        'services.marketing.feature3',
        'services.marketing.feature4',
        'services.marketing.feature5',
        'services.marketing.feature6',
        'services.marketing.feature7',
        'services.marketing.feature8'
      ],
      price: 'services.price'
    },
    {
      id: 'branding-comunicacion',
      title: 'services.branding.title',
      description: 'services.branding.description',
      icon: '✨',
      features: [
        'services.branding.feature1',
        'services.branding.feature2',
        'services.branding.feature3',
        'services.branding.feature4',
        'services.branding.feature5',
        'services.branding.feature6',
        'services.branding.feature7',
        'services.branding.feature8'
      ],
      price: 'services.price'
    },
    {
      id: 'capacitaciones-workshops',
      title: 'services.capacitaciones.title',
      description: 'services.capacitaciones.description',
      icon: '🎓',
      features: [
        'services.capacitaciones.feature1',
        'services.capacitaciones.feature2',
        'services.capacitaciones.feature3',
        'services.capacitaciones.feature4',
        'services.capacitaciones.feature5',
        'services.capacitaciones.feature6',
        'services.capacitaciones.feature7',
        'services.capacitaciones.feature8'
      ],
      price: 'services.price'
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
    const result = this.i18nService.translate(key);
    console.log(`Translating "${key}" -> "${result}"`);
    return result;
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
    
    // Z-index elevado cuando está expandida (pero menor que el header)
    if (isExpanded) {
      classes += 'z-40 ';
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
    // Create WhatsApp message with service information using translations
    const phoneNumber = '5522991026770'; // +55 22 99102-6770 without + and spaces
    const serviceTitle = this.translate(service.title);
    const serviceDescription = this.translate(service.description);
    
    const message = `¡Hola! Me interesa obtener más información sobre el servicio "${serviceTitle}".

Descripción del servicio:
${serviceDescription}

Me gustaría conocer más detalles sobre:
• Precio y formas de pago
• Tiempos de entrega
• Proceso de trabajo
• Próximos pasos

¡Espero tu respuesta!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  }

  selectPlan(plan: ServicePlan): void {
    // Create WhatsApp message with plan information
    const phoneNumber = '5522991026770'; // +55 22 99102-6770 without + and spaces
    const message = `¡Hola! Me interesa el plan "${plan.name}" (${plan.price}/${plan.duration}).

Descripción del plan:
${plan.description}

Características incluidas:
${plan.features.map(feature => `• ${feature}`).join('\n')}

Me gustaría conocer más detalles sobre:
• Proceso de contratación
• Formas de pago
• Cuándo podríamos comenzar
• Próximos pasos

¡Espero tu respuesta!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
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

  startConversation(): void {
    // Create WhatsApp message for general inquiry
    const phoneNumber = '5522991026770'; // +55 22 99102-6770 without + and spaces
    const message = `¡Hola! Me interesa conocer más sobre tus servicios.

Me gustaría que conversemos sobre:
• Mis objetivos y necesidades
• Qué servicio sería el más adecuado para mí
• Precios y modalidades de trabajo
• Próximos pasos

¡Espero poder trabajar contigo!`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  }
}
