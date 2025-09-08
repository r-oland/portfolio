import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import appropriate from 'public/images/appropriate.jpg';
import climbing from 'public/images/climbing.jpg';
import music from 'public/images/music.jpg';
import dance from 'public/images/dance.jpg';

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
        en: 'Currently available for work!',
        nl: 'Momenteel beschikbaar voor werk!',
      },
    ],
    // short
    [
      {
        en: "My name is Roland. What I love doing is making unique ideas come to life and solving complex problems. The front-end is where I'm most comfortable but that doesn't mean that I shy away from back-end development or designing.",
        nl: 'Mijn naam is Roland. Wat ik graag doe is unieke ideeën tot leven brengen en complexe problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, maar dat betekent niet dat ik wegloop van back-end development of ontwerpen.',
      },
      {
        en: 'Currently based in Eindhoven and available for work. Feel free to reach out if you have any questions or want to discuss availability!',
        nl: 'Ik ben momenteel gevestigd in Eindhoven en ben beschikbaar voor werk. Neem gerust contact op als je vragen hebt of de beschikbaarheid wilt bespreken!',
      },
    ],
    // Extensive
    [
      {
        en: "My name is Roland. What I love doing is making unique ideas come to life and solving complex problems. The front-end is where I'm most comfortable, especially with React.js, but that doesn't mean I shy away from back-end development, native development, 3D-rendering, or designing.",
        nl: 'Mijn naam is Roland. Wat ik graag doe is unieke ideeën tot leven brengen en complexe problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, vooral met React.js, maar dat betekent niet dat ik wegloop van back-end development, native development, 3D-rendering of ontwerpen.',
      },
      {
        en: "Outside of work, you'll find me making music, climbing, going away with my camper, reading, working on side projects, or spending time with friends.",
        nl: 'Buiten mijn werk om zie je me muziek maken, klimmen, er even tussenuit gaan met mijn camper, lezen, aan side projects werken of tijd spenderen met vrienden.',
      },
      {
        en: 'Currently based in Eindhoven and available for work. Feel free to reach out if you have any questions or want to discuss availability!',
        nl: 'Ik ben momenteel gevestigd in Eindhoven en ben beschikbaar voor werk. Neem gerust contact op als je vragen hebt of de beschikbaarheid wilt bespreken!',
      },
    ],
  ],
  imageTitles: [
    { en: 'a generic picture', nl: 'een generieke foto' },
    { en: 'rock climbing', nl: 'geklim in de rotsen' },
    { en: 'a bit of dancing', nl: 'wat gedans' },
    { en: 'some music making', nl: 'een muziekje' },
  ],
  images: [appropriate, climbing, dance, music],
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
