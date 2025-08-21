import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { I18nService } from '../../services/i18n.service';
import { Testimonial } from '../../shared/interfaces/common.interfaces';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit, OnDestroy {
  currentTestimonialIndex = signal(0);
  private autoSlideInterval?: number;

  testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'María González',
      position: 'CEO',
      company: 'EcoTech Solutions',
      content: 'Trabajar con Juli ha sido una experiencia transformadora para nuestra empresa. Su visión estratégica y creatividad audiovisual elevaron nuestra marca a un nivel completamente nuevo. Los resultados superaron todas nuestras expectativas.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1494790108755-2616c084821b?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Carlos Mendoza',
      position: 'Director de Marketing',
      company: 'Innovate Media',
      content: 'Juli no solo cumplió con nuestros objetivos, los superó ampliamente. Su enfoque profesional, atención al detalle y capacidad para traducir ideas complejas en contenido visual impactante la convierten en una aliada invaluable.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: new Date('2024-02-20')
    },
    {
      id: '3',
      name: 'Ana Rodríguez',
      position: 'Fundadora',
      company: 'Boutique Creativa',
      content: 'La combinación perfecta de arte y estrategia. Juli entendió nuestra visión desde el primer momento y la llevó a la realidad de una manera que nunca imaginamos posible. El crecimiento en nuestras redes sociales fue espectacular.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: new Date('2024-03-10')
    }
  ];

  additionalTestimonials: Testimonial[] = [
    {
      id: '4',
      name: 'Roberto Silva',
      position: 'Gerente General',
      company: 'Tech Startup',
      content: 'Juli nos ayudó a crear una identidad visual sólida y una estrategia de marketing que realmente funcionó. Muy recomendada.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: new Date('2023-12-05')
    },
    {
      id: '5',
      name: 'Laura Pérez',
      position: 'Directora Creativa',
      company: 'Design Studio',
      content: 'Profesionalismo excepcional y resultados que superan las expectativas. Juli entiende perfectamente las necesidades del cliente.',
      rating: 5,
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: new Date('2023-11-18')
    },
    {
      id: '6',
      name: 'Diego Martín',
      position: 'CMO',
      company: 'Global Corp',
      content: 'La calidad del trabajo audiovisual y la estrategia de marketing digital fueron impecables. Definitivamente volveremos a trabajar juntos.',
      rating: 4,
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      date: new Date('2023-10-25')
    }
  ];

  clientStats = [
    { value: '98%', label: 'Satisfacción del Cliente', icon: '😊' },
    { value: '150+', label: 'Proyectos Completados', icon: '✅' },
    { value: '300%', label: 'Promedio ROI', icon: '📈' },
    { value: '48h', label: 'Tiempo de Respuesta', icon: '⚡' }
  ];

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  nextTestimonial(): void {
    this.stopAutoSlide();
    const nextIndex = (this.currentTestimonialIndex() + 1) % this.testimonials.length;
    this.currentTestimonialIndex.set(nextIndex);
    this.startAutoSlide();
  }

  previousTestimonial(): void {
    this.stopAutoSlide();
    const prevIndex = this.currentTestimonialIndex() === 0 
      ? this.testimonials.length - 1 
      : this.currentTestimonialIndex() - 1;
    this.currentTestimonialIndex.set(prevIndex);
    this.startAutoSlide();
  }

  goToTestimonial(index: number): void {
    this.stopAutoSlide();
    this.currentTestimonialIndex.set(index);
    this.startAutoSlide();
  }

  private startAutoSlide(): void {
    this.autoSlideInterval = window.setInterval(() => {
      this.nextTestimonial();
    }, 8000); // Change slide every 8 seconds
  }

  private stopAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = undefined;
    }
  }

  getDefaultAvatar(name: string): string {
    // Generate a default avatar URL based on the name
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=ec4899&color=fff&size=150`;
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', { 
      year: 'numeric', 
      month: 'long' 
    }).format(date);
  }

  trackByTestimonialId(index: number, testimonial: Testimonial): string {
    return testimonial.id;
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
