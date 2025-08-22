import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SupportedLanguage, Language } from '../shared/interfaces/common.interfaces';

export interface Translations {
  [key: string]: {
    [K in SupportedLanguage]: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private currentLanguage = signal<SupportedLanguage>('es');
  private languageSubject = new BehaviorSubject<SupportedLanguage>('es');
  
  currentLanguage$ = this.languageSubject.asObservable();

  private translations: Translations = {
    // Header
    'header.portfolio': {
      es: 'Portfolio',
      en: 'Portfolio',
      pt: 'Portfólio'
    },
    'header.contact': {
      es: 'Contactar',
      en: 'Contact',
      pt: 'Contatar'
    },
    
    // Navigation
    'nav.home': {
      es: 'Inicio',
      en: 'Home',
      pt: 'Início'
    },
    'nav.about': {
      es: 'Sobre Mí',
      en: 'About Me',
      pt: 'Sobre Mim'
    },
    'nav.portfolio': {
      es: 'Portfolio',
      en: 'Portfolio',
      pt: 'Portfólio'
    },
    'nav.services': {
      es: 'Servicios',
      en: 'Services',
      pt: 'Serviços'
    },
    'nav.testimonials': {
      es: 'Testimonios',
      en: 'Testimonials',
      pt: 'Testemunhos'
    },
    'nav.contact': {
      es: 'Contacto',
      en: 'Contact',
      pt: 'Contato'
    },

    // Home section
    'home.greeting': {
      es: 'Hola, soy',
      en: 'Hi, I am',
      pt: 'Oi, eu sou'
    },
    'home.title': {
      es: 'Profesional en Artes Audiovisuales y Marketing',
      en: 'Audiovisual Arts and Marketing Professional',
      pt: 'Profissional em Artes Audiovisuais e Marketing'
    },
    'home.description': {
      es: 'Apasionada por el marketing digital y el storytelling de marca. Con experiencia en estrategia de contenido, engagement de audiencia y liderazgo de equipos creativos para desarrollar campañas de alto impacto.',
      en: 'Passionate about digital marketing and brand storytelling. With experience in content strategy, audience engagement, and leading creative teams to develop high-impact campaigns.',
      pt: 'Apaixonada por marketing digital e storytelling de marca. Com experiência em estratégia de conteúdo, engajamento de audiência e liderança de equipes criativas para desenvolver campanhas de alto impacto.'
    },
    'home.viewPortfolio': {
      es: 'Ver Portfolio',
      en: 'View Portfolio',
      pt: 'Ver Portfólio'
    },

    // About section
    'about.title': {
      es: 'Sobre Mí',
      en: 'About Me',
      pt: 'Sobre Mim'
    },
    'about.content': {
      es: 'Mi pasión por las artes audiovisuales comenzó desde muy joven. Durante mi carrera universitaria, descubrí el poder del marketing digital como herramienta para amplificar el impacto del contenido creativo. Esta combinación única me ha permitido desarrollar estrategias innovadoras que fusionan la creatividad artística con objetivos comerciales concretos.',
      en: 'My passion for audiovisual arts began at a very young age. During my university career, I discovered the power of digital marketing as a tool to amplify the impact of creative content. This unique combination has allowed me to develop innovative strategies that merge artistic creativity with concrete business objectives.',
      pt: 'Minha paixão pelas artes audiovisuais começou desde muito jovem. Durante minha carreira universitária, descobri o poder do marketing digital como ferramenta para amplificar o impacto do conteúdo criativo. Essa combinação única me permitiu desenvolver estratégias inovadoras que fundem a criatividade artística com objetivos comerciais concretos.'
    },

    // Services
    'services.title': {
      es: 'Servicios',
      en: 'Services',
      pt: 'Serviços'
    },
    
    // Contact
    'contact.title': {
      es: 'Contacto',
      en: 'Contact',
      pt: 'Contato'
    },
    'contact.getInTouch': {
      es: '¡Trabajemos juntos!',
      en: "Let's work together!",
      pt: 'Vamos trabalhar juntos!'
    }
  };

  readonly availableLanguages: Language[] = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'pt', name: 'Português', flag: '🇧🇷' }
  ];

  getCurrentLanguage(): SupportedLanguage {
    return this.currentLanguage();
  }

  setLanguage(language: SupportedLanguage): void {
    this.currentLanguage.set(language);
    this.languageSubject.next(language);
    localStorage.setItem('language', language);
  }

  translate(key: string, language?: SupportedLanguage): string {
    const lang = language || this.currentLanguage();
    const translation = this.translations[key];
    
    if (!translation) {
      console.warn(`Translation key '${key}' not found`);
      return key;
    }
    
    return translation[lang] || translation.es || key;
  }

  initializeLanguage(): void {
    const savedLanguage = localStorage.getItem('language') as SupportedLanguage;
    const browserLanguage = navigator.language.split('-')[0] as SupportedLanguage;
    
    let defaultLanguage: SupportedLanguage = 'es';
    
    if (savedLanguage && this.isValidLanguage(savedLanguage)) {
      defaultLanguage = savedLanguage;
    } else if (this.isValidLanguage(browserLanguage)) {
      defaultLanguage = browserLanguage;
    }
    
    this.setLanguage(defaultLanguage);
  }

  private isValidLanguage(language: string): language is SupportedLanguage {
    return ['es', 'en', 'pt'].includes(language);
  }
}
