import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { PortfolioComponent } from './features/portfolio/portfolio.component';
import { ServicesComponent } from './features/services/services.component';
import { TestimonialsComponent } from './features/testimonials/testimonials.component';
import { ContactComponent } from './features/contact/contact.component';
import { I18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    PortfolioComponent,
    ServicesComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Juli Portfolio - Artes Audiovisuales & Marketing';

  constructor(private i18nService: I18nService) {}

  ngOnInit(): void {
    this.i18nService.initializeLanguage();
  }
}
