export type ProjectType = {
  id: string;
  name: string;
  functionality: string;
  description: {
    Project: { en: string; nl: string };
    Role: { en: string; nl: string };
  };
  startYear: number;
  endYear?: number;
  client: string;
  clientLink?: string;
  github?: string;
  url: string;
  marketingUrl?: string;
  amountOfImages: number;
  behindPaywall?: boolean;
};

export const projects: ProjectType[] = [
  // Decathlon
  {
    id: 'decathlon',
    name: 'Decathlon-NL webshop',
    functionality: 'Frontend developer - Consultant',
    description: {
      Project: {
        en: 'Assisting the local front-end development team, working on the NL Decathlon webshop by giving advice and collaborating as a freelance consultant.',
        nl: '',
      },
      Role: {
        en: 'Guiding the team in best practices, streamlining internal processes, improving dev experience, hiring new developers, and working in a sprint structure.',
        nl: '',
      },
    },
    startYear: 2023,
    endYear: 2024,
    client: 'Decathlon',
    url: 'https://www.decathlon.nl/',
    amountOfImages: 6,
  },
  // Gilde sport app
  {
    id: 'sport-app',
    name: 'Gilde sport app',
    functionality: 'Native developer',
    description: {
      Project: {
        en: 'An app where students of the Gilde Education manage upcoming sport clinics and track their progress around sport and vitality activities with the help of data visualizations.',
        nl: '',
      },
      Role: {
        en: 'Being the lead mobile developer, building the app from scratch using React Native within a agile team of 4 working in a Kanban structure.',
        nl: '',
      },
    },
    startYear: 2022,
    endYear: 2023,
    client: 'Gilde opleidingen',
    clientLink: 'https://www.gildeopleidingen.nl/',
    marketingUrl: 'https://www.tast.studio/portfolio/gilde',
    url: '',
    amountOfImages: 7,
  },
  // Klik
  {
    id: 'klik',
    name: 'Klik',
    functionality: 'Frontend lead',
    description: {
      Project: {
        en: 'A social web app for schools that enables students to find experts in their fields of interest and make carrier oriented connections.',
        nl: 'Een sociale web app voor scholen die studenten in staat stelt om experts in hun interessegebied te vinden en carrière gerichte connecties te maken.',
      },
      Role: {
        en: 'It was my task to rebuild the entire frontend from scratch during a complete refactor. This included a large section of D3 data visualizations and animations.',
        nl: 'Mijn taak was om de frontend van de grond op te bouwen tijdens een complete refactor. Dit omvatte een groot deel D3 datavisualisaties en animaties.',
      },
    },
    startYear: 2020,
    endYear: 2022,
    client: 'Studio Tast',
    clientLink: 'https://www.tast.studio/',
    url: 'https://klik.tast.cloud/',
    marketingUrl: 'https://klik.tast.tools',
    amountOfImages: 8,
    behindPaywall: true,
  },
  // Spiek
  {
    id: 'spiek',
    name: 'Spiek',
    functionality: 'Frontend lead',
    description: {
      Project: {
        en: 'A web app that helps children with dyslexia by improving their reading and spelling skills trough a large collection of exercises and instructions.',
        nl: 'Een web app die kinderen met dyslexie helpt door hun lees- en spellingvaardigheden te verbeteren door middel van een grote collectie oefeningen en instructies.',
      },
      Role: {
        en: 'I wrote the frontend from scratch and maintained it in a sprint structure. keeping the app scalable was important due to a large amount of variation in exercises.',
        nl: 'Ik heb de frontend opgebouwd en onderhouden in een sprintstructuur. Belangrijk was om de app schaalbaar te houden vanwege een grote variatie in oefeningen.',
      },
    },
    startYear: 2020,
    endYear: 2022,
    client: 'Opdidakt',
    clientLink: 'https://opdidakt.nl/',
    url: 'https://spiekdigitaal.nl/inloggen',
    marketingUrl: 'https://opdidakt.nl/spiek-digitaal/',
    amountOfImages: 9,
    behindPaywall: true,
  },
  // Groow
  {
    id: 'groow',
    name: 'Groow',
    functionality: 'Frontend lead',
    description: {
      Project: {
        en: 'A web app that serves as a digital extension of a physical toolkit. The purpose of Groow is to offer a method that guides you in solving complex problems.',
        nl: 'Een app die dient als een digitale uitbreiding van een fysieke toolkit. Groow biedt een methodiek aan die je helpt bij het oplossen van complexe problemen.',
      },
      Role: {
        en: 'I did an entire refactor of the frontend and added new features in a sprint structure. The main purpose of the refactor was to make the app type-safe and scalable.',
        nl: 'Ik heb de frontend opnieuw opgebouwd en verder ontwikkeld in een sprintstructuur. Het doel van de refactor was om de app type-safe en schaalbaar te maken.',
      },
    },
    startYear: 2020,
    endYear: 2022,
    client: 'Studio Tast',
    clientLink: 'https://www.tast.studio/',
    marketingUrl: 'https://groow.tast.tools',
    url: 'https://learntogroow.com',
    amountOfImages: 10,
  },
  // Persistful
  {
    id: 'persistful',
    name: 'Persistful',
    functionality: 'Frontend - Backend - Design',
    description: {
      Project: {
        en: 'A reward based habit tracking app (Progressive Web App) that provides structure and consistency while trying to build, get rid of or maintain habits.',
        nl: 'Een habit tracking app (Progressive Web App) die structuur en consistentie biedt tijdens het proberen op te bouwen, af te leren of te behouden van gewoontes.',
      },
      Role: {
        en: 'I came up with the idea, designed the app and built it from scratch. I also wrote the backend, using the Next.js framework, in Node.js and MongoDB.',
        nl: 'Ik heb het idee bedacht, de app ontworpen en opgebouwd. Ook heb ik binnen Next.js de backend geschreven in Node.js en MongoDB.',
      },
    },
    startYear: 2022,
    client: 'Passion project',
    url: 'https://persistful.com/',
    github: 'https://github.com/r-oland/persistful',
    amountOfImages: 5,
  },
  // Dust Media
  {
    id: 'dust-media',
    name: 'Dust Media',
    functionality: 'Frontend - CMS - Design',
    description: {
      Project: {
        en: 'A portfolio for local videographer Colin Dust. The goal was to create a minimal portfolio that would put a heavy emphases on his work.',
        nl: 'Een portfolio voor videograaf Colin Dust. Het doel was om een minimalistische portfolio te maken die een grote nadruk legt op zijn werk.',
      },
      Role: {
        en: 'Following the already existing branding, I created the design, built the frontend and made sure a headless CMS was set up for easy content editing.',
        nl: 'Aan de hand van de al bestaande huisstijl heb ik het ontwerp gemaakt, de frontend opgebouwd en een headless CMS opgezet voor content editing.',
      },
    },
    startYear: 2020,
    endYear: 2020,
    client: 'Dust Media',
    github: 'https://github.com/DustMedia?tab=repositories',
    url: 'https://dustmedia.nl/',
    amountOfImages: 6,
  },
];
