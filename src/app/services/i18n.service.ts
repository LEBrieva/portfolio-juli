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
      es: 'Especialista en marketing audiovisual con más de 8 años transformando ideas en resultados medibles.',
      en: 'Audiovisual marketing specialist with over 8 years transforming ideas into measurable results.',
      pt: 'Especialista em marketing audiovisual com mais de 8 anos transformando ideias em resultados mensuráveis.'
    },
    // Professional Journey Carousel
    'about.journey.slide1.title': {
      es: 'Mi Inicio Artístico',
      en: 'My Artistic Beginning',
      pt: 'Meu Início Artístico'
    },
    'about.journey.slide1.content': {
      es: 'Soy Julieta Rojas, especialista en marketing audiovisual con más de 8 años de experiencia. Mi recorrido comenzó en el mundo del arte y la fotografía, lo que me dio una mirada estética que hoy aplico en la comunicación digital.',
      en: 'I am Julieta Rojas, audiovisual marketing specialist with over 8 years of experience. My journey began in the world of art and photography, which gave me an aesthetic perspective that I now apply to digital communication.',
      pt: 'Sou Julieta Rojas, especialista em marketing audiovisual com mais de 8 anos de experiência. Minha jornada começou no mundo da arte e da fotografia, o que me deu um olhar estético que hoje aplico na comunicação digital.'
    },
    'about.journey.slide2.title': {
      es: 'Liderazgo y Resultados',
      en: 'Leadership and Results',
      pt: 'Liderança e Resultados'
    },
    'about.journey.slide2.content': {
      es: 'Lideré equipos y campañas para marcas como Rusty Argentina, Vulk Clothing y Local\'s Only, diseñando estrategias omnicanal, lanzamientos y colaboraciones con influencers que generaron resultados medibles y cercanía con las audiencias.',
      en: 'I led teams and campaigns for brands like Rusty Argentina, Vulk Clothing and Local\'s Only, designing omnichannel strategies, launches and influencer collaborations that generated measurable results and audience engagement.',
      pt: 'Liderei equipes e campanhas para marcas como Rusty Argentina, Vulk Clothing e Local\'s Only, criando estratégias omnicanal, lançamentos e colaborações com influencers que geraram resultados mensuráveis e proximidade com as audiências.'
    },
    'about.journey.slide3.title': {
      es: 'Nuevo Capítulo en Brasil',
      en: 'New Chapter in Brazil',
      pt: 'Novo Capítulo no Brasil'
    },
    'about.journey.slide3.content': {
      es: 'En 2024 me mudé a Brasil para continuar mi carrera de manera remota, trabajando como consultora externa en marketing y marca personal. Hoy ayudo a empresas y profesionales a potenciar su presencia digital.',
      en: 'In 2024 I moved to Brazil to continue my career remotely, working as an external consultant in marketing and personal branding. Today I help companies and professionals enhance their digital presence.',
      pt: 'Em 2024 me mudei para o Brasil para continuar minha carreira de forma remota, trabalhando como consultora externa em marketing e marca pessoal. Hoje ajudo empresas e profissionais a potencializar sua presença digital.'
    },
    'about.journey.slide4.title': {
      es: 'Mi Diferencial',
      en: 'My Differentiator',
      pt: 'Meu Diferencial'
    },
    'about.journey.slide4.content': {
      es: 'Mi diferencial está en unir dos mundos: la sensibilidad artística de mis inicios con la planificación estratégica y analítica del marketing actual. Diseño narrativas auténticas y alcanzo objetivos de negocio con creatividad y estrategia.',
      en: 'My differentiator lies in uniting two worlds: the artistic sensitivity of my beginnings with the strategic and analytical planning of modern marketing. I design authentic narratives and achieve business objectives with creativity and strategy.',
      pt: 'Meu diferencial está em unir dois mundos: a sensibilidade artística dos meus inícios com o planejamento estratégico e analítico do marketing atual. Crio narrativas autênticas e alcanço objetivos de negócio com criatividade e estratégia.'
    },
    // Personal Info
    'about.personalInfo.title': {
      es: 'Información Personal',
      en: 'Personal Information',
      pt: 'Informação Pessoal'
    },
    'about.personalInfo.name': {
      es: 'Nombre',
      en: 'Name',
      pt: 'Nome'
    },
    'about.personalInfo.location': {
      es: 'Ubicación',
      en: 'Location',
      pt: 'Localização'
    },
    'about.personalInfo.education': {
      es: 'Educación',
      en: 'Education',
      pt: 'Educação'
    },
    'about.personalInfo.experience': {
      es: 'Experiencia',
      en: 'Experience',
      pt: 'Experiência'
    },
    'about.personalInfo.email': {
      es: 'Email',
      en: 'Email',
      pt: 'Email'
    },
    // Certifications
    'about.certifications.title': {
      es: 'Certificaciones',
      en: 'Certifications',
      pt: 'Certificações'
    },
    'about.certifications.communityManager': {
      es: 'Community Manager',
      en: 'Community Manager',
      pt: 'Community Manager'
    },
    'about.certifications.escrituraEstrategicaRrss': {
      es: 'Escritura Estrategica RRSS',
      en: 'Strategic RRSS Writing',
      pt: 'Escrita Estratégica RRSS'
    },
    'about.certifications.liderazgoParaEquiposCreativos': {
      es: 'Liderazgo para Equipos Creativos',
      en: 'Leadership for Creative Teams',
      pt: 'Liderança para Equipes Criativas'
    },
    'about.certifications.estrategiasDeBranding': {
      es: 'Estrategias de Branding',
      en: 'Branding Strategies',
      pt: 'Estratégias de Branding'
    },
    'about.certifications.fotografia': {
      es: 'Fotografía',
      en: 'Photography',
      pt: 'Fotografia'
    },
    'about.certifications.tecnicaturaEnArtesAudiovisuales': {
      es: 'Tecnicatura en Artes Audiovisuales',
      en: 'Technical Degree in Audiovisual Arts',
      pt: 'Técnica em Artes Audiovisuales'
    },
    'about.certifications.communityManagerDescription': {
      es: 'Certificación en Community Manager.',
      en: 'Certification in Community Manager.',
      pt: 'Certificação em Community Manager.'
    },
    'about.certifications.escrituraEstrategicaRrssDescription': {
      es: 'Certificación en Escritura Estrategica RRSS.',
      en: 'Certification in Strategic RRSS Writing.',
      pt: 'Certificação em Escrita Estratégica RRSS.'
    },
    'about.certifications.liderazgoParaEquiposCreativosDescription': {
      es: 'Certificación en Liderazgo para Equipos Creativos.',
      en: 'Certification in Leadership for Creative Teams.',
      pt: 'Certificação em Liderança para Equipes Criativas.'
    },
    'about.certifications.estrategiasDeBrandingDescription': {
      es: 'Certificación en Estrategias de Branding.',
      en: 'Certification in Branding Strategies.',
      pt: 'Certificação em Estratégias de Branding.'
    },
    'about.certifications.fotografiaDescription': {
      es: 'Certificación en Fotografía.',
      en: 'Certification in Photography.',
      pt: 'Certificação em Fotografia.'
    },
    'about.certifications.tecnicaturaEnArtesAudiovisualesDescription': {
      es: 'Certificación en Tecnicatura en Artes Audiovisuales.',
      en: 'Certification in Technical Degree in Audiovisual Arts.',
      pt: 'Certificação em Técnica em Artes Audiovisuales.'
    },

    // Portfolio
    'portfolio.description': {
      es: 'Explora una selección de mis trabajos más destacados en marketing digital y producción audiovisual.',
      en: 'Explore a selection of my most notable works in digital marketing and audiovisual production.',
      pt: 'Explore uma seleção de meus trabalhos mais destacados em marketing digital e produção audiovisual.'
    },
    // Portfolio Categories
    'portfolio.categories.all': {
      es: 'Todos',
      en: 'All',
      pt: 'Todos'
    },
    'portfolio.categories.marketing': {
      es: 'Marketing',
      en: 'Marketing',
      pt: 'Marketing'
    },
    'portfolio.categories.audiovisual': {
      es: 'Audiovisual',
      en: 'Audiovisual',
      pt: 'Audiovisual'
    },
    'portfolio.categories.photography': {
      es: 'Fotografía',
      en: 'Photography',
      pt: 'Fotografia'
    },
    'portfolio.categories.design': {
      es: 'Diseño',
      en: 'Design',
      pt: 'Design'
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
