import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';

export const user = {
  about: [
    // really short
    [{ en: '', nl: '' }],
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
