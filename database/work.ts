export type ProjectType = {
  name: string;
  functionality: { en: string; nl: string };
  description: { en: string; nl: string };
  startYear: number;
  endYear?: number;
  client: string;
  clientLink?: string;
  color: string;
  github?: string;
  url: string;
  logo: string;
  images: string[];
};

export const projects: ProjectType[] = [
  {
    name: 'Groow',
    functionality: { en: 'Frontend lead', nl: '' },
    description: {
      en: 'An open-source tool that brings attention and understanding to how color contrast can affect different people with visual impairments.',
      nl: '',
    },
    startYear: 2020,
    client: 'Studio Tast',
    clientLink: 'https://www.studiotast.nl/',
    color: '#0827E9',
    github: 'https://github.com/r-oland/persistful',
    url: 'https://learntogroow.com',
    logo: '/projects/groow/logo.svg',
    images: [
      '/projects/groow/groow-1.png',
      '/projects/groow/groow-2.png',
      '/projects/groow/groow-3.png',
    ],
  },
  {
    name: 'Persistful',
    functionality: { en: 'Frontend lead', nl: '' },
    description: {
      en: 'An open-source tool that brings attention and understanding to how color contrast can affect different people with visual impairments.',
      nl: '',
    },
    startYear: 2020,
    endYear: 2022,
    client: 'Passion project',
    color: '#3F6C5B',
    url: 'https://learntogroow.com',
    logo: '/projects/groow/logo.svg',
    images: [
      '/projects/groow/groow-1.png',
      '/projects/groow/groow-2.png',
      '/projects/groow/groow-3.png',
    ],
  },
];
