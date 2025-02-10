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
        en: 'Assisted the local front-end development team in enhancing the NL Decathlon webshop by providing advice and collaborating as a freelance consultant.',
        nl: 'Ondersteunde het lokale front-end team bij het verbeteren van de NL Decathlon webshop door advies te geven en samen te werken als freelance consultant.',
      },
      Role: {
        en: 'Guided the team in implementing best practices, streamlining processes, improving dev experience, hiring new developers, and working within a sprint structure.',
        nl: 'Het team helpen bij het inzetten van best practices, procesoptimalisatie, verbetering van dev experience, aannemen van nieuwe ontwikkelaars en sprintwerken.',
      },
    },
    startYear: 2023,
    endYear: 2025,
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
        en: 'Developed an app for Gilde Education students to manage upcoming sport clinics and track their progress in sport and vitality activities through data visualizations.',
        nl: 'Een app voor studenten van Gilde opleidingen om sportklinieken te beheren en hun voortgang in sport- en vitaliteitsactiviteiten te meten via datavisualisaties.',
      },
      Role: {
        en: 'Led the mobile development team, building the app from scratch using React Native within an agile team, working in a Kanban structure.',
        nl: 'Leidde het mobiele ontwikkelingsteam bij het opbouwen van de app vanaf nul met React Native, binnen een agile team dat werkte volgens een Kanban-structuur.',
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
        en: 'Created a social web app for schools enabling students to connect with experts in their fields of interest and establish career-oriented connections.',
        nl: 'Een sociale web app voor scholen die studenten in staat stelt om experts in hun interessegebied te vinden en carrière gerichte connecties te maken.',
      },
      Role: {
        en: 'Rebuilt the entire frontend during a complete refactor, incorporating a significant portion of complex D3 data visualizations and animations.',
        nl: 'Leidde de herbouw van de frontend tijdens een refactor, waarbij complexe D3-datavisualisaties en animaties werden geïntegreerd.',
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
        en: 'Developed a web app to aid children with dyslexia in improving their reading and spelling skills through a diverse collection of exercises and instructions.',
        nl: 'Een web app die kinderen met dyslexie helpt hun lees- en spellingvaardigheden te verbeteren door middel van een grote verzameling oefeningen en instructies.',
      },
      Role: {
        en: "Built, led, and maintained the frontend within a sprint structure, with a focus on emphasizing scalability to accommodate the app's diverse range of exercises.",
        nl: 'Bouwen en onderhouden van de frontend binnen een sprintstructuur, met de nadruk op schaalbaarheid om de diverse reeks oefeningen van de app te ondersteunen.',
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
        en: 'Developed a web app serving as a digital extension of a physical toolkit, offering a project-based methodology to guide users in solving complex problems.',
        nl: 'Een app die dient als een digitale uitbreiding van een fysieke toolkit. Groow biedt een projectmatige methodiek aan die je helpt bij het oplossen van complexe problemen.',
      },
      Role: {
        en: 'Executed a complete refactor of the frontend, focusing on making the app type-safe and scalable. Additionally, added new features following a sprint-based approach.',
        nl: 'Een volledige refactor van de frontend om de app type-safe en schaalbaar te maken. Verder doorlopend nieuwe functies geïmplementeerd binnen een sprintstructuur.',
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
        en: 'A reward-based habit tracking app (PWA) thats centered around motivating users to become more consistent in their habits by building up streaks and earning rewards.',
        nl: 'Een habit tracking app (PWA) die gebruikers motiveert om consistenter te worden in gewoontes door het opbouwen van streaks en het verdienen van beloningen.',
      },
      Role: {
        en: 'Conceived, designed, and developed the app from the ground up, assuming the role of the core maintainer and consistently integrating new features and enhancements.',
        nl: 'Het concept, ontwerp en de app vanuit de basis ontwikkeld. Momenteel actief als core maintainer die voortdurend nieuwe functies en verbeteringen toevoegt.',
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
        en: 'A portfolio showcasing the work of videographer Colin Dust, with a goal of emphasizing his work through an minimalist design approach.',
        nl: 'Een portfolio voor videograaf Colin Dust. Het doel was om een minimalistische portfolio te maken die een grote nadruk legt op zijn werk.',
      },
      Role: {
        en: 'Designed and developed the portfolio based on existing branding, built the frontend, and set up a headless CMS for easy content editing.',
        nl: 'Het ontwerp gemaakt, de frontend opgebouwd en een headless CMS opgezet voor content editing, gebaseerd op de al bestaande huisstijl.',
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
