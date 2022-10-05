import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import polite from 'public/images/polite.jpg';
import enthusiastic from 'public/images/enthusiastic.jpg';
import huge from 'public/images/huge.jpg';

export const user = {
  aboutTitles: [
    { en: 'really short', nl: 'zeer korte' },
    { en: 'short', nl: 'korte' },
    { en: 'extensive', nl: 'uitgebreide' },
    { en: 'long', nl: 'lange' },
  ],
  about: [
    // really short
    [
      {
        en: "My name is Roland and I'm trying my very best.",
        nl: 'Ik ben mijn best aan het doen.',
      },
    ],
    // short
    [
      {
        en: "My name is Roland. What I love doing is making ideas come to life and solving problems. The front-end is where I'm most comfortable and where I have the most fun but that doesn't mean I shy away from back-end development or designing.",
        nl: '',
      },
      {
        en: "I can currently be found in Eindhoven, The Netherlands and I'm available for (remote) freelance work. Please don't hesitate to reach out if you have any questions or if you want to check for availability.",
        nl: '',
      },
    ],
    // long
    [
      {
        en: "My name is Roland. What I love doing is making ideas come to life and solving problems. The front-end is where I'm most comfortable and where I have the most fun but that doesn't mean I shy away from back-end development or designing.",
        nl: '',
      },
      {
        en: 'A concept I have always been interested in is bridging the gap between functionality and creativity. This could come in the form of interesting animations, clever design choices or whatever else you can imagine. The possibilities are endless, which is something that excites me!',
        nl: '',
      },
      {
        en: "I can currently be found in Eindhoven, The Netherlands and I'm available for (remote) freelance work. Please don't hesitate to reach out if you have any questions or if you want to check for availability.",
        nl: '',
      },
    ],
    [
      {
        en: "My name is Roland. What I love doing is making ideas come to life and solving problems. The front-end is where I'm most comfortable and where I have the most fun but that doesn't mean I shy away from back-end development or designing.",
        nl: '',
      },
      {
        en: 'My story started back in 2017 when I was introduced to the world of programming during a web development class. I immediately stuck to it and became fairly proficient in a short time. This let me to having time to do other things like, you know, (allegedly) letting half of my class pay me to do the same for them. Suffice it to say, I was hooked!',
        nl: '',
      },
      {
        en: 'A concept I have always been interested in is bridging the gap between functionality and creativity. This could come in the form of interesting animations, clever design choices or whatever else you can imagine. The possibilities are endless, which is something that excites me!',
        nl: '',
      },
      {
        en: "I can currently be found in Eindhoven, The Netherlands and I'm available for (remote) freelance work. Please don't hesitate to reach out if you have any questions or if you want to check for availability.",
        nl: '',
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
