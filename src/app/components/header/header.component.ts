import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject, takeUntil } from 'rxjs';
import { I18nService } from '../../services/i18n.service';
import { SupportedLanguage, Language, NavItem } from '../../shared/interfaces/common.interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header 
      class="fixed left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg z-50 transition-all duration-300 max-w-full overflow-hidden"
      [class.top-0]="isHeaderVisible()"
      [class.-top-20]="!isHeaderVisible()"
    >
      <nav class="container mx-auto px-4 py-4 max-w-full">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <a href="#home" class="flex items-center space-x-2 group">
              <div class="bg-gradient-to-r from-primary-600 to-secondary-600 p-2 rounded-lg transition-transform duration-300 group-hover:scale-105">
                <span class="text-white font-bold text-xl">J</span>
              </div>
              <span class="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                JuliPortfolio
              </span>
            </a>
          </div>

          <!-- Navigation - Desktop -->
          <div class="hidden md:flex items-center space-x-8">
            <ul class="flex items-center space-x-6">
              <li *ngFor="let item of navItems" class="relative">
                <a 
                  [href]="item.href" 
                  class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 py-2 px-1 relative group"
                  (click)="scrollToSection($event, item.href)"
                >
                  {{ translate(item.label) }}
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Language Selector & Mobile Menu -->
          <div class="flex items-center space-x-4">
            <!-- Language Dropdown -->
            <div class="relative" #languageDropdown data-dropdown="language">
              <button 
                (click)="toggleLanguageDropdown()"
                class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              >
                <span class="text-lg">{{ currentLanguageFlag() }}</span>
                <span class="text-sm font-medium text-gray-700 hidden sm:inline">
                  {{ currentLanguageName() }}
                </span>
                <svg 
                  class="w-4 h-4 text-gray-500 transform transition-transform duration-200"
                  [class.rotate-180]="showLanguageDropdown()"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"></path>
                </svg>
              </button>
            </div>

            <!-- Mobile Menu Button -->
            <button 
              (click)="toggleMobileMenu()"
              class="block md:hidden p-2 rounded-lg bg-primary-100 hover:bg-primary-200 transition-colors duration-200 border border-primary-300"
              aria-label="Menú de navegación"
              title="Menú"
              data-menu="mobile"
            >
              <svg 
                class="w-6 h-6 text-primary-700"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  [attr.d]="showMobileMenu() ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Navigation Menu -->
        <div 
          *ngIf="showMobileMenu()"
          class="md:hidden mt-4 py-4 border-t border-gray-200 bg-white shadow-lg animate-fade-in"
        >
          <ul class="space-y-2">
            <li *ngFor="let item of navItems">
              <a 
                [href]="item.href"
                (click)="scrollToSection($event, item.href); toggleMobileMenu()"
                class="block px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg font-medium transition-colors duration-200"
              >
                {{ translate(item.label) }}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>

    <!-- Language Dropdown Menu - Outside header for proper z-index -->
    <div 
      *ngIf="debugDropdownState()"
      class="fixed bg-white rounded-lg shadow-xl border border-gray-200 py-2 min-w-[150px]"
      style="z-index: 99999; top: 60px; right: 20px;"
    >
      <button
        *ngFor="let language of i18nService.availableLanguages"
        (click)="selectLanguage(language.code)"
        class="w-full flex items-center space-x-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        [class.bg-primary-50]="language.code === currentLanguage()"
        [class.text-primary-600]="language.code === currentLanguage()"
      >
        <span class="text-lg">{{ language.flag }}</span>
        <span class="font-medium">{{ language.name }}</span>
      </button>
    </div>
  `,
  styles: [`
    @keyframes fade-in {
      from { 
        opacity: 0; 
        transform: translateY(-10px); 
      }
      to { 
        opacity: 1; 
        transform: translateY(0); 
      }
    }
    
    .animate-fade-in {
      animation: fade-in 0.2s ease-out;
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  private lastScrollY = 0;
  
  currentLanguage = signal<SupportedLanguage>('es');
  showLanguageDropdown = signal(false);
  showMobileMenu = signal(false);
  isHeaderVisible = signal(true);

  navItems: NavItem[] = [
    { id: 'home', label: 'nav.home', href: '#home' },
    { id: 'about', label: 'nav.about', href: '#about' },
    { id: 'portfolio', label: 'nav.portfolio', href: '#portfolio' },
    { id: 'services', label: 'nav.services', href: '#services' },
    { id: 'testimonials', label: 'nav.testimonials', href: '#testimonials' },
    { id: 'contact', label: 'nav.contact', href: '#contact' }
  ];

  constructor(public i18nService: I18nService) {}

  ngOnInit(): void {
    // Initialize i18n service
    this.i18nService.initializeLanguage();
    
    this.i18nService.currentLanguage$
      .pipe(takeUntil(this.destroy$))
      .subscribe(language => {
        this.currentLanguage.set(language);
      });

    // Close dropdowns when clicking outside
    document.addEventListener('click', this.handleOutsideClick.bind(this));
    
    // Add scroll listener for header hide/show
    window.addEventListener('scroll', this.handleScroll.bind(this), { passive: true });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  translate(key: string): string {
    return this.i18nService.translate(key);
  }

  currentLanguageFlag(): string {
    const language = this.i18nService.availableLanguages.find(
      lang => lang.code === this.currentLanguage()
    );
    return language?.flag || '🇪🇸';
  }

  currentLanguageName(): string {
    const language = this.i18nService.availableLanguages.find(
      lang => lang.code === this.currentLanguage()
    );
    return language?.name || 'Español';
  }

  // Debug method to check dropdown state in template
  debugDropdownState(): boolean {
    const state = this.showLanguageDropdown();
    return state;
  }

  toggleLanguageDropdown(): void {
    const newState = !this.showLanguageDropdown();
    this.showLanguageDropdown.set(newState);
    this.showMobileMenu.set(false);
  }

  toggleMobileMenu(): void {
    this.showMobileMenu.set(!this.showMobileMenu());
    this.showLanguageDropdown.set(false);
  }

  selectLanguage(languageCode: string): void {
    this.i18nService.setLanguage(languageCode as SupportedLanguage);
    this.showLanguageDropdown.set(false);
  }

  scrollToSection(event: Event, href: string): void {
    event.preventDefault();
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const headerHeight = 80; // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    
    this.showMobileMenu.set(false);
  }

  private handleScroll(): void {
    const currentScrollY = window.scrollY;
    const scrollThreshold = 100; // Minimum scroll distance to trigger hide/show
    
    // Only apply auto-hide on mobile devices
    if (window.innerWidth <= 768) {
      if (currentScrollY > scrollThreshold) {
        // Scrolling down - hide header
        if (currentScrollY > this.lastScrollY && this.isHeaderVisible()) {
          this.isHeaderVisible.set(false);
          // Close any open dropdowns when hiding
          this.showLanguageDropdown.set(false);
          this.showMobileMenu.set(false);
        }
        // Scrolling up - show header
        else if (currentScrollY < this.lastScrollY && !this.isHeaderVisible()) {
          this.isHeaderVisible.set(true);
        }
      }
    } else {
      // Always show header on desktop
      this.isHeaderVisible.set(true);
    }
    
    this.lastScrollY = currentScrollY;
  }

  private handleOutsideClick(event: Event): void {
    const target = event.target as HTMLElement;
    const languageDropdown = target.closest('[data-dropdown="language"]');
    const mobileMenuButton = target.closest('[data-menu="mobile"]');
    
    if (!languageDropdown && this.showLanguageDropdown()) {
      this.showLanguageDropdown.set(false);
    }
    
    if (!mobileMenuButton && this.showMobileMenu()) {
      this.showMobileMenu.set(false);
    }
  }
}
