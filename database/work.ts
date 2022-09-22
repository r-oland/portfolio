export type ProjectType = {
  id: string;
  name: string;
  functionality: string;
  description: { en: string; nl: string };
  startYear: number;
  endYear?: number;
  client: string;
  clientLink?: string;
  color: string;
  github?: string;
  url: string;
  marketingUrl?: string;
  amountOfImages: number;
};

export const projects: ProjectType[] = [
  // Klik
  {
    id: 'klik',
    name: 'Klik',
    functionality: 'Frontend lead',
    description: {
      en: 'A social web app that is designed to assist students in getting into contact with experts in their field of interest. My role was rebuild the frontend from scratch during a refactor.',
      nl: 'Een sociale web app, gebouwd rondom het doel om studenten in contact te laten komen met experts in gebieden van interesse. Mijn rol was het opnieuw bouwen van de frontend tijdens een refactor.',
    },
    startYear: 2020,
    client: 'Studio Tast',
    clientLink: 'https://www.tast.studio/',
    color: '#030626',
    url: 'https://klik.tast.cloud/',
    marketingUrl: 'https://klik.tast.tools',
    amountOfImages: 4,
  },
  // Spiek
  {
    id: 'spiek',
    name: 'Spiek',
    functionality: 'Frontend lead',
    description: {
      en: 'A web app where children (with dyslexia) can learn to read and spell by offering fun and interactive instructions and exercises. My role was to build the frontend from the ground up and to maintain it.',
      nl: 'Een web app waarin kinderen (met dyslexie) door middel van levendige en interactieve instructies en oefeningen beter leren lezen en spellen. Mijn rol was om de frontend vanuit niets op te bouwen en te onderhouden.',
    },
    startYear: 2020,
    client: 'Opdidakt',
    clientLink: 'https://opdidakt.nl/',
    color: '#3edc89',
    url: 'https://spiekdigitaal.nl/inloggen',
    marketingUrl: 'https://opdidakt.nl/spiek-digitaal/',
    amountOfImages: 8,
  },
  // Groow
  {
    id: 'groow',
    name: 'Groow',
    functionality: 'Frontend lead',
    description: {
      en: 'A web app that serves as a digital extension of a physical toolkit. The purpose of Groow is to offer a method to guide you in solving complex problems. My role was to lead a complete refactor of the frontend.',
      nl: 'Een app die dient als een digitale uitbreiding van een fysieke kit. Groow biedt een methode aan die je helpt bij het oplossen van complexe problemen. Mijn rol was om een complete refactor van de frontend te leiden.',
    },
    startYear: 2020,
    client: 'Studio Tast',
    clientLink: 'https://www.tast.studio/',
    color: '#0827E9',
    marketingUrl: 'https://groow.tast.tools',
    url: 'https://learntogroow.com',
    amountOfImages: 9,
  },
  // Persistful
  {
    id: 'persistful',
    name: 'Persistful',
    functionality: 'Frontend - Backend - Design',
    description: {
      en: 'A reward based habit tracking app (PWA) that guides you in being more conscious and consistent in the way you spend your free time fruitfully. I did everything from thinking out the concept to deploying the application.',
      nl: 'Een habit tracking app (PWA) die je helpt om bewuster en consistenter te zijn in het nuttige besteden van je vrije tijd. Ik heb alles gedaan van het bedenken van het concept tot het deployen van de applicatie.',
    },
    startYear: 2022,
    client: 'Passion project',
    color: '#18e597',
    url: 'https://persistful.com/',
    github: 'https://github.com/r-oland/persistful',
    amountOfImages: 4,
  },
  // Dust Media
  {
    id: 'dust-media',
    name: 'Dust Media',
    functionality: 'Frontend - CMS - Design',
    description: {
      en: 'A portfolio for the videographer Colin Dust. The goal was to create a minimal portfolio that would put a heavy emphases on his work. I designed and developed the site with a headless CMS for content editing.',
      nl: 'Een portfolio voor de videograaf Colin Dust. Het doel was om een minimalistische portfolio te maken met een grote nadruk op het werk. Ik heb de site ontworpen en opgezet met een headless CMS voor content editing.',
    },
    startYear: 2020,
    endYear: 2020,
    client: 'Dust Media',
    color: '#e1c598',
    github: 'https://github.com/DustMedia?tab=repositories',
    url: 'https://dustmedia.nl/',
    amountOfImages: 4,
  },
  // Qblox
  {
    id: 'qblox',
    name: 'Qblox',
    functionality: 'Frontend - CMS',
    description: {
      en: 'A marketing site for the quantum computing company Qblox. The goal was to provide a flexibel frontend where the client can easily add and edit pages and content blocks. My role was to build the frontend and the CMS.',
      nl: "Een marketing site voor Qblox Quantum. Het doel was om een flexibele frontend te maken waarbij pagina's en content toegevoegd en bewerkt kunnen worden. Mijn rol was om de frontend en het CMS te bouwen.",
    },
    startYear: 2020,
    endYear: 2020,
    client: 'Qblox Quantum Computing',
    color: '#00819d',
    github: 'https://github.com/QbloxWebsiteAccount/Website',
    url: 'https://qblox.com/',
    amountOfImages: 7,
  },
  // Portfolio
  {
    id: 'portfolio',
    name: 'Portfolio',
    functionality: 'Frontend - Backend - Design',
    description: {
      en: 'The site that your currently on. I built this site to showcase my work and to experiment with new Technologies. All 3D effects are handled by React Three Fiber. Curious how it build? Check out the source code.',
      nl: 'Deze site is gebouwd om mijn werk te tonen en om te experimenteren met nieuwe technologieën. Alle 3D effecten worden afgehandeld door React Three Fiber. Benieuwd hoe het gebouwd is? Check de source code.',
    },
    startYear: 2022,
    client: 'Passion project',
    color: '#3f6c5b',
    github: 'https://github.com/r-oland/portfolio',
    url: 'https://rolandbranten.com/',
    amountOfImages: 1,
  },
];
