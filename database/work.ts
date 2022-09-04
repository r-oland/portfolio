export type ProjectType = {
  name: string;
  functionality: string;
  description: string;
  startYear: number;
  endYear?: number;
  client: string;
  github?: string;
  url: string;
  logo: string;
  images: string[];
};

export const projects: ProjectType[] = [
  {
    name: 'Groow',
    functionality: 'Frontend lead',
    description:
      'An open-source tool that brings attention and understanding to how color contrast can affect different people with visual impairments.',
    startYear: 2020,
    endYear: 2022,
    client: 'Studio Tast',
    url: 'https://learntogroow.com',
    logo: '/projects/groow/logo.svg',
    images: [
      '/projects/groow/groow-1.png',
      '/projects/groow/groow-2.png',
      '/projects/groow/groow-3.png',
    ],
  },
];
