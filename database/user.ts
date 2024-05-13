import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import polite from 'public/images/polite.jpg';
import enthusiastic from 'public/images/enthusiastic.jpg';
import huge from 'public/images/huge.jpg';

export const user = {
  aboutTitles: [
    { en: 'really short', nl: 'zeer korte' },
    { en: 'short', nl: 'korte' },
    { en: 'more extensive', nl: 'uitgebreidere' },
  ],
  about: [
    // really short
    [
      {
        en: "My name is Roland and I'm passionate about creating interesting, complex digital experiences.",
        nl: 'Mijn naam is Roland en ik ben enthousiast over het creëren van interessante, complexe digitale ervaringen.',
      },
      {
        en: 'Currently available for freelance work!',
        nl: 'Momenteel beschikbaar voor freelance werk!',
      },
    ],
    // short
    [
      {
        en: "My name is Roland. What I love doing is making unique ideas come to life and solving complex problems. The front-end is where I'm most comfortable but that doesn't mean that I shy away from back-end development or designing.",
        nl: 'Mijn naam is Roland. Wat ik graag doe is unieke ideeën tot leven brengen en complexe problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, maar dat betekent niet dat ik wegloop van back-end development of ontwerpen.',
      },
      {
        en: 'Currently based in Eindhoven and available for freelance work. Feel free to reach out if you have any questions or want to discuss availability!',
        nl: 'Ik ben momenteel gevestigd in Eindhoven en beschikbaar voor freelance werk. Neem gerust contact op als je vragen hebt of de beschikbaarheid wilt bespreken!',
      },
    ],
    // Extensive
    [
      {
        en: "My name is Roland. What I love doing is making unique ideas come to life and solving complex problems. The front-end is where I'm most comfortable, especially with React.js, but that doesn't mean I shy away from back-end development, native development, 3D-rendering, or designing.",
        nl: 'Mijn naam is Roland. Wat ik graag doe is unieke ideeën tot leven brengen en complexe problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, vooral met React.js, maar dat betekent niet dat ik wegloop van back-end development, native development, 3D-rendering of ontwerpen.',
      },
      {
        en: "Outside of work, you'll find me making music, climbing, skateboarding, reading, working on side projects, or spending time with friends.",
        nl: 'Buiten mijn werk om zie je me muziek maken, klimmen, skateboarden, lezen, aan side projects werken of tijd doorbreng met vrienden.',
      },
      {
        en: 'Currently based in Eindhoven and available for freelance work. Feel free to reach out if you have any questions or want to discuss availability!',
        nl: 'Ik ben momenteel gevestigd in Eindhoven en beschikbaar voor freelance werk. Neem gerust contact op als je vragen hebt of de beschikbaarheid wilt bespreken!',
      },
    ],
  ],
  imageTitles: [
    { en: 'a polite smile', nl: 'een beleefde lach' },
    { en: 'an enthusiastic face', nl: 'een enthousiast gezicht' },
    { en: 'a huge fake laugh', nl: 'een enorme nep lach' },
  ],
  images: [polite, enthusiastic, huge],
  contact: [
    {
      icon: faEnvelope,
      link: 'mailto:info@rolandbranten.nl',
      tag: 'info@rolandbranten.nl',
    },
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/rolandbranten',
      tag: 'LinkedIn',
    },
    {
      icon: faGithub,
      link: 'https://github.com/r-oland',
      tag: 'Github',
    },
  ],
};
