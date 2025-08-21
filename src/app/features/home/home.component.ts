import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { SocialButtonComponent } from '../../shared/ui/social-button/social-button.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent, SocialButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileImage = 'perfil.jpeg';
  
  // Referencia explícita para evitar warning de linting
  readonly SocialButtonComponent = SocialButtonComponent;
  
  socialLinks = [
    { platform: 'linkedin' as const, url: 'https://www.linkedin.com/in/julietacuadrarojas/' },
    { platform: 'instagram' as const, url: 'https://www.instagram.com/visagesvillages/' },
    { platform: 'behance' as const, url: 'https://behance.net/julimartinez' },
    { platform: 'email' as const, url: 'mailto:juli@juliportfolio.com' }
  ];

  constructor(private i18nService: I18nService) {}

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  scrollToPortfolio(): void {
    this.scrollToSection('portfolio');
  }

  scrollToContact(): void {
    this.scrollToSection('contact');
  }

  scrollToNext(): void {
    this.scrollToSection('about');
  }

  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
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
