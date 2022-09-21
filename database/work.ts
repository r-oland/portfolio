import { StaticImageData } from 'next/image';
// Klik
import KlikLogo from 'public/projects/klik/logo.svg';
// Spiek
import SpiekLogo from 'public/projects/spiek/logo.svg';
// Persistful
import PersistfulLogo from 'public/projects/persistful/logo.svg';
// Groow
import Groow1 from 'public/projects/groow/groow-1.png';
import Groow2 from 'public/projects/groow/groow-2.png';
import Groow3 from 'public/projects/groow/groow-3.png';
import GroowLogo from 'public/projects/groow/logo.svg';
// Dust Media
import DustMediaLogo from 'public/projects/dust-media/logo.svg';
// Qblox
import QbloxLogo from 'public/projects/qblox/logo.svg';
// Portfolio
import PortfolioLogo from 'public/projects/portfolio/logo.svg';

export type ProjectType = {
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
  logo: StaticImageData;
  images: StaticImageData[];
};

export const projects: ProjectType[] = [
  // Klik
  {
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
    logo: KlikLogo,
    images: [Groow1, Groow2, Groow3],
  },
  // Spiek
  {
    name: 'Spiek',
    functionality: 'Frontend lead',
    description: {
      en: 'A web app where children (with dyslexia) can learn to read and spell by offering fun and interactive instructions and exercises. My role was to build the frontend from the ground up and to maintain it.',
      nl: 'Een web app waarin kinderen (met dyslexie) door middel van levendige en interactieve instructies en oefeningen beter leren lezen en spellen. Mijn rol was om de frontend vanuit niets op te bouwen en te onderhouden.',
    },
    startYear: 2020,
    client: 'Studio Tast',
    clientLink: 'https://www.tast.studio/',
    color: '#1368e5',
    url: 'https://spiekdigitaal.nl/inloggen',
    marketingUrl: 'https://opdidakt.nl/spiek-digitaal/',
    logo: SpiekLogo,
    images: [Groow1, Groow2, Groow3],
  },
  // Persistful
  {
    name: 'Persistful',
    functionality: 'Frontend - Backend - Design',
    description: {
      en: 'A reward based habit tracking app that guides you in being more conscious and consistent in the way you spend your free time fruitfully. I did everything from thinking out the concept to deploying the application.',
      nl: 'Een habit tracking app die je helpt om meer bewust en consistent te zijn in het nuttig besteden van je vrije tijd. Ik heb alles gedaan van het bedenken van het concept tot het deployen van de applicatie.',
    },
    startYear: 2022,
    client: 'Passion project',
    color: '#18e597',
    url: 'https://persistful.com/',
    github: 'https://github.com/r-oland/persistful',
    logo: PersistfulLogo,
    images: [Groow1, Groow2, Groow3],
  },
  // Groow
  {
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
    logo: GroowLogo,
    images: [Groow1, Groow2, Groow3],
  },
  // Dust Media
  {
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
    logo: DustMediaLogo,
    images: [Groow1, Groow2, Groow3],
  },
  // Qblox
  {
    name: 'Qblox',
    functionality: 'Frontend - CMS',
    description: {
      en: 'A marketing site for the quantum computing company Qblox. The goal was to provide a flexibel frontend where the client can easily add and edit pages and content blocks. My role was to build the frontend and the CMS.',
      nl: "Een marketing site voor Qblox Quantum. Het doel was om een flexibele frontend te maken waarbij pagina's en content toegevoegd en bewerkt kunnen worden. Mijn rol was om de frontend en het CMS te bouwen.",
    },
    startYear: 2020,
    client: 'Qblox Quantum Computing',
    color: '#00819d',
    github: 'https://github.com/QbloxWebsiteAccount/Website',
    url: 'https://qblox.com/',
    logo: QbloxLogo,
    images: [Groow1, Groow2, Groow3],
  },
  // Portfolio
  {
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
    logo: PortfolioLogo,
    images: [Groow1, Groow2, Groow3],
  },
];
