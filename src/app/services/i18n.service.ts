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
    
    // Nueva estructura de habilidades
    'about.skills.professional.title': {
      es: 'Competencias Profesionales',
      en: 'Professional Competencies',
      pt: 'Competências Profissionais'
    },
    'about.skills.professional.description': {
      es: 'Estrategias y competencias clave para el liderazgo y la gestión de proyectos de marketing.',
      en: 'Key strategies and competencies for leadership and marketing project management.',
      pt: 'Estratégias e competências chave para liderança e gestão de projetos de marketing.'
    },
    'about.skills.tools.title': {
      es: 'Herramientas y Plataformas',
      en: 'Tools and Platforms',
      pt: 'Ferramentas e Plataformas'
    },
    'about.skills.tools.description': {
      es: 'Dominio de herramientas digitales para gestión, colaboración, social media e inteligencia artificial.',
      en: 'Mastery of digital tools for management, collaboration, social media and artificial intelligence.',
      pt: 'Domínio de ferramentas digitais para gestão, colaboração, mídia social e inteligência artificial.'
    },
    'about.skills.creative.title': {
      es: 'Producción & Creatividad',
      en: 'Production & Creativity',
      pt: 'Produção & Criatividade'
    },
    'about.skills.creative.description': {
      es: 'Habilidades creativas y técnicas para la producción de contenido audiovisual y diseño.',
      en: 'Creative and technical skills for audiovisual content production and design.',
      pt: 'Habilidades criativas e técnicas para produção de conteúdo audiovisual e design.'
    },
    
    // Redes Sociales
    'about.social.title': {
      es: 'Experiencia en Redes Sociales',
      en: 'Social Media Experience',
      pt: 'Experiência em Redes Sociais'
    },
    'about.social.description': {
      es: 'Expertise especializado en las principales plataformas de redes sociales con resultados comprobados.',
      en: 'Specialized expertise in major social media platforms with proven results.',
      pt: 'Expertise especializado nas principais plataformas de redes sociais com resultados comprovados.'
    },
    
    // Idiomas
    'about.languages.title': {
      es: 'Idiomas',
      en: 'Languages',
      pt: 'Idiomas'
    },
    'about.languages.description': {
      es: 'Competencias lingüísticas que permiten comunicación efectiva en mercados globales.',
      en: 'Language skills that enable effective communication in global markets.',
      pt: 'Competências linguísticas que permitem comunicação eficaz em mercados globais.'
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
    },

    // Services section
    'services.title': {
      es: 'Servicios',
      en: 'Services',
      pt: 'Serviços'
    },
    'services.description': {
      es: 'Soluciones estratégicas personalizadas para potenciar tu marca y conectar con tu audiencia de manera auténtica.',
      en: 'Customized strategic solutions to boost your brand and authentically connect with your audience.',
      pt: 'Soluções estratégicas personalizadas para potencializar sua marca e conectar com seu público de forma autêntica.'
    },

    // Service 1: Auditoría Express
    'services.auditoria.title': {
      es: 'Auditoría Express de Redes + Workshop (2 h)',
      en: 'Express Social Media Audit + Workshop (2 h)',
      pt: 'Auditoria Express de Redes + Workshop (2 h)'
    },
    'services.auditoria.description': {
      es: 'Diagnóstico accionable de tu presencia digital (contenido, bio, highlights, pauta, SEO local si aplica) + plan de mejoras inmediatas.',
      en: 'Actionable diagnosis of your digital presence (content, bio, highlights, ads, local SEO if applicable) + immediate improvement plan.',
      pt: 'Diagnóstico acionável da sua presença digital (conteúdo, bio, destaques, anúncios, SEO local se aplicável) + plano de melhorias imediatas.'
    },
    'services.auditoria.feature1': {
      es: 'Análisis completo de presencia digital',
      en: 'Complete digital presence analysis',
      pt: 'Análise completa da presença digital'
    },
    'services.auditoria.feature2': {
      es: 'Diagnóstico de contenido actual',
      en: 'Current content diagnosis',
      pt: 'Diagnóstico do conteúdo atual'
    },
    'services.auditoria.feature3': {
      es: 'Revisión de biografías y highlights',
      en: 'Bio and highlights review',
      pt: 'Revisão de biografias e destaques'
    },
    'services.auditoria.feature4': {
      es: 'Evaluación de pauta publicitaria',
      en: 'Advertising evaluation',
      pt: 'Avaliação de publicidade'
    },
    'services.auditoria.feature5': {
      es: 'SEO local cuando aplique',
      en: 'Local SEO when applicable',
      pt: 'SEO local quando aplicável'
    },
    'services.auditoria.feature6': {
      es: 'Plan de mejoras inmediatas',
      en: 'Immediate improvement plan',
      pt: 'Plano de melhorias imediatas'
    },
    'services.auditoria.feature7': {
      es: 'Workshop práctico de 2 horas',
      en: '2-hour practical workshop',
      pt: 'Workshop prático de 2 horas'
    },
    'services.auditoria.feature8': {
      es: 'Recomendaciones accionables',
      en: 'Actionable recommendations',
      pt: 'Recomendações acionáveis'
    },

    // Service 2: Consultoría de Marca Personal
    'services.marca.title': {
      es: 'Consultoría de Marca Personal',
      en: 'Personal Branding Consulting',
      pt: 'Consultoria de Marca Pessoal'
    },
    'services.marca.description': {
      es: 'Definición de identidad, propuesta de valor, tono, pilares de contenido y playbook para LinkedIn/Instagram.',
      en: 'Identity definition, value proposition, tone, content pillars and playbook for LinkedIn/Instagram.',
      pt: 'Definição de identidade, proposta de valor, tom, pilares de conteúdo e playbook para LinkedIn/Instagram.'
    },
    'services.marca.feature1': {
      es: 'Definición de identidad personal',
      en: 'Personal identity definition',
      pt: 'Definição de identidade pessoal'
    },
    'services.marca.feature2': {
      es: 'Desarrollo de propuesta de valor',
      en: 'Value proposition development',
      pt: 'Desenvolvimento da proposta de valor'
    },
    'services.marca.feature3': {
      es: 'Definición de tono de comunicación',
      en: 'Communication tone definition',
      pt: 'Definição do tom de comunicação'
    },
    'services.marca.feature4': {
      es: 'Pilares de contenido personalizados',
      en: 'Customized content pillars',
      pt: 'Pilares de conteúdo personalizados'
    },
    'services.marca.feature5': {
      es: 'Playbook para LinkedIn',
      en: 'LinkedIn playbook',
      pt: 'Playbook para LinkedIn'
    },
    'services.marca.feature6': {
      es: 'Playbook para Instagram',
      en: 'Instagram playbook',
      pt: 'Playbook para Instagram'
    },
    'services.marca.feature7': {
      es: 'Estrategia de posicionamiento',
      en: 'Positioning strategy',
      pt: 'Estratégia de posicionamento'
    },
    'services.marca.feature8': {
      es: 'Guidelines de marca personal',
      en: 'Personal brand guidelines',
      pt: 'Diretrizes de marca pessoal'
    },

    // Service 3: Consultoría Externa de Marketing
    'services.marketing.title': {
      es: 'Consultoría Externa de Marketing',
      en: 'External Marketing Consulting',
      pt: 'Consultoria Externa de Marketing'
    },
    'services.marketing.description': {
      es: 'Estrategia integral por objetivos: calendario, campañas, colaboraciones con influencers/afiliados y seguimiento por OKRs/KPIs.',
      en: 'Comprehensive objective-based strategy: calendar, campaigns, influencer/affiliate collaborations and OKR/KPI tracking.',
      pt: 'Estratégia integral por objetivos: calendário, campanhas, colaborações com influencers/afiliados e acompanhamento por OKRs/KPIs.'
    },
    'services.marketing.feature1': {
      es: 'Estrategia integral por objetivos',
      en: 'Comprehensive objective-based strategy',
      pt: 'Estratégia integral por objetivos'
    },
    'services.marketing.feature2': {
      es: 'Calendario de contenidos estratégico',
      en: 'Strategic content calendar',
      pt: 'Calendário de conteúdos estratégico'
    },
    'services.marketing.feature3': {
      es: 'Diseño de campañas efectivas',
      en: 'Effective campaign design',
      pt: 'Design de campanhas eficazes'
    },
    'services.marketing.feature4': {
      es: 'Colaboraciones con influencers',
      en: 'Influencer collaborations',
      pt: 'Colaborações com influencers'
    },
    'services.marketing.feature5': {
      es: 'Programas de afiliados',
      en: 'Affiliate programs',
      pt: 'Programas de afiliados'
    },
    'services.marketing.feature6': {
      es: 'Definición de OKRs',
      en: 'OKR definition',
      pt: 'Definição de OKRs'
    },
    'services.marketing.feature7': {
      es: 'Seguimiento de KPIs',
      en: 'KPI tracking',
      pt: 'Acompanhamento de KPIs'
    },
    'services.marketing.feature8': {
      es: 'Reportes y optimización',
      en: 'Reports and optimization',
      pt: 'Relatórios e otimização'
    },

    // Service 4: Branding & Comunicación
    'services.branding.title': {
      es: 'Branding & Comunicación',
      en: 'Branding & Communication',
      pt: 'Branding & Comunicação'
    },
    'services.branding.description': {
      es: 'Storytelling, reposicionamiento, lanzamientos, guidelines de estilo y mensajes.',
      en: 'Storytelling, repositioning, launches, style guidelines and messaging.',
      pt: 'Storytelling, reposicionamento, lançamentos, diretrizes de estilo e mensagens.'
    },
    'services.branding.feature1': {
      es: 'Desarrollo de storytelling',
      en: 'Storytelling development',
      pt: 'Desenvolvimento de storytelling'
    },
    'services.branding.feature2': {
      es: 'Estrategias de reposicionamiento',
      en: 'Repositioning strategies',
      pt: 'Estratégias de reposicionamento'
    },
    'services.branding.feature3': {
      es: 'Planes de lanzamiento',
      en: 'Launch plans',
      pt: 'Planos de lançamento'
    },
    'services.branding.feature4': {
      es: 'Guidelines de estilo',
      en: 'Style guidelines',
      pt: 'Diretrizes de estilo'
    },
    'services.branding.feature5': {
      es: 'Arquitectura de mensajes',
      en: 'Message architecture',
      pt: 'Arquitetura de mensagens'
    },
    'services.branding.feature6': {
      es: 'Identidad visual aplicada',
      en: 'Applied visual identity',
      pt: 'Identidade visual aplicada'
    },
    'services.branding.feature7': {
      es: 'Tono de voz consistente',
      en: 'Consistent tone of voice',
      pt: 'Tom de voz consistente'
    },
    'services.branding.feature8': {
      es: 'Narrativa de marca',
      en: 'Brand narrative',
      pt: 'Narrativa de marca'
    },

    // Service 5: Capacitaciones & Workshops
    'services.capacitaciones.title': {
      es: 'Capacitaciones & Workshops',
      en: 'Training & Workshops',
      pt: 'Capacitações & Workshops'
    },
    'services.capacitaciones.description': {
      es: 'Talleres a medida para equipos: contenido que rinde, buenas prácticas, flujo de trabajo y herramientas (Notion/Canva/IA).',
      en: 'Custom team workshops: high-performing content, best practices, workflow and tools (Notion/Canva/AI).',
      pt: 'Workshops personalizados para equipes: conteúdo que funciona, boas práticas, fluxo de trabalho e ferramentas (Notion/Canva/IA).'
    },
    'services.capacitaciones.feature1': {
      es: 'Talleres personalizados para equipos',
      en: 'Custom team workshops',
      pt: 'Workshops personalizados para equipes'
    },
    'services.capacitaciones.feature2': {
      es: 'Contenido que genera resultados',
      en: 'Result-generating content',
      pt: 'Conteúdo que gera resultados'
    },
    'services.capacitaciones.feature3': {
      es: 'Implementación de buenas prácticas',
      en: 'Best practices implementation',
      pt: 'Implementação de boas práticas'
    },
    'services.capacitaciones.feature4': {
      es: 'Optimización de flujo de trabajo',
      en: 'Workflow optimization',
      pt: 'Otimização do fluxo de trabalho'
    },
    'services.capacitaciones.feature5': {
      es: 'Capacitación en Notion',
      en: 'Notion training',
      pt: 'Capacitação em Notion'
    },
    'services.capacitaciones.feature6': {
      es: 'Capacitación en Canva',
      en: 'Canva training',
      pt: 'Capacitação em Canva'
    },
    'services.capacitaciones.feature7': {
      es: 'Integración de herramientas IA',
      en: 'AI tools integration',
      pt: 'Integração de ferramentas IA'
    },
    'services.capacitaciones.feature8': {
      es: 'Metodologías de trabajo eficientes',
      en: 'Efficient work methodologies',
      pt: 'Metodologias de trabalho eficientes'
    },

    // UI Elements
    'services.consultQuote': {
      es: 'Consultar Cotización',
      en: 'Request Quote',
      pt: 'Solicitar Cotação'
    },
    'services.startConversation': {
      es: 'Iniciar Conversación',
      en: 'Start Conversation',
      pt: 'Iniciar Conversa'
    },
    'services.moreFeatures': {
      es: 'características más',
      en: 'more features',
      pt: 'características a mais'
    },
    'services.readyToStart': {
      es: '¿Listo para comenzar tu proyecto?',
      en: 'Ready to start your project?',
      pt: 'Pronto para começar seu projeto?'
    },
    'services.letsCreateTogether': {
      es: 'Hablemos sobre tus ideas y creemos algo increíble juntos',
      en: "Let's talk about your ideas and create something amazing together",
      pt: 'Vamos conversar sobre suas ideias e criar algo incrível juntos'
    },
    'services.price': {
      es: 'A cotizar',
      en: 'Quote on request',
      pt: 'A cotar'
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
