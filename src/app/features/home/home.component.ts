import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  profileImage = 'perfil.jpeg';
  
  socialLinks = [
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/julimartinez', icon: '💼', label: 'LinkedIn' },
    { platform: 'Instagram', url: 'https://instagram.com/julimartinez_', icon: '📸', label: 'Instagram' },
    { platform: 'Behance', url: 'https://behance.net/julimartinez', icon: '🎨', label: 'Behance' },
    { platform: 'Email', url: 'mailto:juli@juliportfolio.com', icon: '📧', label: 'Email' }
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
