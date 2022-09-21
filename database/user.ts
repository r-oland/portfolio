import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import polite from 'public/images/polite.jpg';
import enthusiastic from 'public/images/enthusiastic.jpg';
import huge from 'public/images/huge.jpg';

export const user = {
  aboutTitles: [
    { en: 'really short', nl: 'zeer korte' },
    { en: 'short', nl: 'korte' },
    { en: 'long', nl: 'lange' },
  ],
  about: [
    // really short
    [{ en: 'Is trying his very best', nl: 'Is zijn best aan het doen' }],
    // short
    [
      {
        en: "An Eindhoven based human specimen who loves to create cool projects on the web. Next to that, I'm pretty passionate about music 🎵 and I like to stay fit in my kayak 🚣. But, you probably care most about the web part, so let's just continue with that!",
        nl: '',
      },
      {
        en: "I'm a design-oriented front-end developer. I strive to build immersive and beautiful web applications through carefully crafted code and user-centric design. I'm also not afraid to write some server-side code from time to time.",
        nl: '',
      },
      {
        en: 'Rethinking the way I write my code and learning new technologies are probably my two favorite activities within programming.',
        nl: '',
      },
    ],
    // long
    [{ en: '', nl: '' }],
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
