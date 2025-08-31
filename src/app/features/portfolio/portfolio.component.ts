import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/ui/card/card.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { I18nService } from '../../services/i18n.service';
import { PortfolioProject } from '../../shared/interfaces/common.interfaces';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardComponent, ButtonComponent],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  activeCategory = signal('all');
  selectedProject = signal<PortfolioProject | null>(null);
  isLoading = signal(false);
  visibleProjects = signal(6);

  categories = [
    { id: 'all', nameKey: 'portfolio.categories.all', icon: '🎯' },
    { id: 'Marketing Digital', nameKey: 'portfolio.categories.marketing', icon: '📊' },
    { id: 'Audiovisual', nameKey: 'portfolio.categories.audiovisual', icon: '🎬' },
    { id: 'Fotografía', nameKey: 'portfolio.categories.photography', icon: '📸' },
    { id: 'Diseño', nameKey: 'portfolio.categories.design', icon: '🎨' }
  ];

  projects: PortfolioProject[] = [
    {
      id: '1',
      title: 'Campaña Digital "Conecta tu Futuro"',
      description: 'Estrategia integral de marketing digital para startup tecnológica, incluyendo contenido multimedia, gestión de redes sociales y campañas publicitarias.',
      imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Google Ads', 'Facebook Ads', 'Content Strategy', 'Analytics'],
      category: 'Marketing Digital',
      demoUrl: 'https://example.com/conecta-futuro',
      projectUrl: 'https://behance.net/gallery/conecta-futuro'
    },
    {
      id: '2',
      title: 'Documental "Voces de la Ciudad"',
      description: 'Producción audiovisual completa de documental independiente sobre artistas urbanos. Premio a Mejor Dirección de Arte 2022.',
      imageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Producción', 'Edición', 'Sound Design', 'Color Grading'],
      category: 'Audiovisual',
      projectUrl: 'https://vimeo.com/voces-ciudad'
    },
    {
      id: '3',
      title: 'Sesión Fotográfica "Esencia Natural"',
      description: 'Serie fotográfica conceptual para marca de cosméticos orgánicos. Enfoque en luz natural y composición minimalista.',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Fotografía de Producto', 'Retoque Digital', 'Composición', 'Lightroom'],
      category: 'Fotografía',
      demoUrl: 'https://gallery.com/esencia-natural'
    },
    {
      id: '4',
      title: 'Identidad Visual "EcoVida"',
      description: 'Desarrollo completo de identidad visual para ONG ambiental, incluyendo logo, paleta de colores y aplicaciones.',
      imageUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Branding', 'Illustrator', 'Manual de Marca', 'Aplicaciones'],
      category: 'Diseño',
      projectUrl: 'https://behance.net/gallery/ecovida-brand'
    },
    {
      id: '5',
      title: 'Video Promocional "Sabores de América"',
      description: 'Producción de video promocional para cadena de restaurantes. Incluye concepto creativo, grabación y post-producción.',
      imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Video Marketing', 'Motion Graphics', 'After Effects', 'Premiere'],
      category: 'Audiovisual',
      demoUrl: 'https://youtube.com/watch?v=sabores-america'
    },
    {
      id: '6',
      title: 'E-commerce "Moda Consciente"',
      description: 'Estrategia de marketing digital completa para tienda online de moda sostenible. Aumento del 300% en conversiones.',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['E-commerce', 'SEO', 'Email Marketing', 'Conversion Rate'],
      category: 'Marketing Digital',
      projectUrl: 'https://case-study.com/moda-consciente'
    },
    {
      id: '7',
      title: 'Campaña Fotográfica "Retratos Urbanos"',
      description: 'Serie de retratos en locaciones urbanas para proyecto editorial. Exploración de la personalidad a través del entorno.',
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Fotografía de Retrato', 'Iluminación Natural', 'Locaciones', 'Editorial'],
      category: 'Fotografía',
      demoUrl: 'https://portfolio.com/retratos-urbanos'
    },
    {
      id: '8',
      title: 'Animación "Historias que Transforman"',
      description: 'Serie de micro-animaciones para campaña de impacto social. Técnica mixta combinando ilustración y motion graphics.',
      imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Motion Graphics', 'Ilustración', 'Storytelling', 'After Effects'],
      category: 'Audiovisual',
      projectUrl: 'https://vimeo.com/historias-transforman'
    }
  ];

  constructor(private i18nService: I18nService) {}

  get filteredProjects(): PortfolioProject[] {
    const filtered = this.activeCategory() === 'all' 
      ? this.projects 
      : this.projects.filter(project => project.category === this.activeCategory());
    
    return filtered.slice(0, this.visibleProjects());
  }

  get hasMoreProjects(): boolean {
    const totalFiltered = this.activeCategory() === 'all' 
      ? this.projects.length 
      : this.projects.filter(project => project.category === this.activeCategory()).length;
    
    return this.visibleProjects() < totalFiltered;
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  setActiveCategory(categoryId: string): void {
    this.activeCategory.set(categoryId);
    this.visibleProjects.set(6);
  }

  getCategoryButtonClass(categoryId: string): string {
    const baseClass = 'px-6 py-2 rounded-full font-medium transition-all duration-300';
    const activeClass = 'bg-primary-600 text-white shadow-lg';
    const inactiveClass = 'text-gray-600 hover:text-primary-600 hover:bg-primary-50';
    
    return `${baseClass} ${this.activeCategory() === categoryId ? activeClass : inactiveClass}`;
  }

  showProjectDetails(project: PortfolioProject): void {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedProject.set(null);
    document.body.style.overflow = 'auto';
  }

  openProject(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  loadMoreProjects(): void {
    this.isLoading.set(true);
    
    // Simulate loading delay
    setTimeout(() => {
      this.visibleProjects.update(current => current + 3);
      this.isLoading.set(false);
    }, 800);
  }

  trackByProjectId(index: number, project: PortfolioProject): string {
    return project.id;
  }
}
