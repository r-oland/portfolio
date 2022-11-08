import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import polite from 'public/images/polite.jpg';
import enthusiastic from 'public/images/enthusiastic.jpg';
import huge from 'public/images/huge.jpg';

export const user = {
  aboutTitles: [
    { en: 'extremely short', nl: 'extreem korte' },
    { en: 'really short', nl: 'zeer korte' },
    { en: 'short', nl: 'korte' },
    { en: 'more personal', nl: 'uitgebreidere' },
    { en: 'complete', nl: 'volledige' },
  ],
  about: [
    // extremely short
    [
      {
        en: "I'm trying.",
        nl: 'Ik doe mijn best.',
      },
    ],
    // really short
    [
      {
        en: "My name is Roland and I'm trying to make cool digital experiences.",
        nl: 'Mijn naam is Roland en ik probeer coole digitale ervaringen te maken.',
      },
    ],
    // short
    [
      {
        en: "My name is Roland. What I love doing is making unique ideas come to life and solving problems. The front-end is where I'm most comfortable but that doesn't mean that I shy away from back-end development or designing.",
        nl: 'Mijn naam is Roland. Wat ik graag doe is unieke ideeën tot leven brengen en problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, maar dat betekent niet dat ik wegloop van back-end development of ontwerpen.',
      },
      {
        en: "I'm currently based in Eindhoven and I'm available for freelance work. Please don't hesitate to reach out if you have any questions or if you want to check for availability!",
        nl: 'Ik ben momenteel gevestigd in Eindhoven en ik ben beschikbaar voor freelance werk. Voel je vrij om contact met mij op te nemen als je vragen hebt of als je voor beschikbaarheid wil checken!',
      },
    ],
    // Extensive
    [
      {
        en: "My name is Roland. What I love doing is making unique ideas come to life and solving complex problems. The front-end is where I'm most comfortable and where I have the most fun but that doesn't mean I shy away from back-end development, 3D-rendering or designing.",
        nl: 'Mijn naam is Roland. Wat ik graag doe is unieke ideeën tot leven brengen en complexe problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, maar dat betekent niet dat ik wegloop van back-end development, 3D-rendering of ontwerpen.',
      },
      {
        en: "Outside of work you'll find me making music, skateboarding, reading, working on a side project or being with friends.",
        nl: 'Buiten het werk om zie je me muziek maken, skateboarden, lezen, aan een side project werken of met vrienden zijn.',
      },
      {
        en: "I'm currently based in Eindhoven, The Netherlands and I'm available for freelance work. Please don't hesitate to reach out if you have any questions or if you want to check for availability!",
        nl: 'Ik ben momenteel gevestigd in Eindhoven en ik ben beschikbaar voor freelance werk. Voel je vrij om contact met mij op te nemen als je vragen hebt of als je voor beschikbaarheid wil checken!',
      },
    ],
    // long
    [
      {
        en: "My name is Roland Branten, a freelance creative developer. What I love doing is making unique ideas come to life and solving complex problems. The front-end is where I'm most comfortable and where I have the most fun but that doesn't mean I shy away from back-end development, app development, 3D-rendering or designing.",
        nl: 'Mijn naam is Roland Branten, een freelance creative developer. Wat ik graag doe is unieke ideeën tot leven brengen en complexe problemen oplossen. De front-end is waar ik me het meest op mijn gemak voel, maar dat betekent niet dat ik wegloop van back-end development, app development, 3D-rendering of ontwerpen.',
      },
      {
        en: "Outside of work you'll find me trying to be a moody singer-songwriter, rehabilitating from a skateboarding accident, attempting to read more, staying up late working on a side project or annoying my friends by destroying them in video games.",
        nl: 'Buiten het werk om zie je me droevige nummers spelen op gitaar, revalideren van een skateboard ongeluk, proberen meer te lezen, laat opblijven om aan een side project te werken of mijn vrienden irriteren door ze kapot te maken in video games.',
      },
      {
        en: "I'm currently based in Eindhoven, The Netherlands and I'm available for freelance work. Please don't hesitate to reach out if you have any questions or if you want to check for availability. I'm looking forward to hearing from you!",
        nl: 'Ik ben momenteel gevestigd in Eindhoven en ik ben beschikbaar voor freelance werk. Voel je vrij om contact met mij op te nemen als je vragen hebt of als je voor beschikbaarheid wil checken. Ik kijk er naar uit om van je te horen!',
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
