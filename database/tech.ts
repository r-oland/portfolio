type RankKeyType = 'S' | 'A' | 'B' | 'D';

export const ranks = [
  {
    key: 'S' as RankKeyType,
    description: {
      en: 'You can wake me up for this stuff!',
      nl: 'Je mag me hiervoor wakker maken!',
    },
  },
  {
    key: 'A' as RankKeyType,
    description: {
      en: 'Could not go without these',
      nl: 'Ik zou niet zonder kunnen',
    },
  },
  {
    key: 'B' as RankKeyType,
    description: {
      en: 'I mean, they are standards for a reason',
      nl: 'Het zijn standaarden voor een reden',
    },
  },
  {
    key: 'C' as RankKeyType,
    description: {
      en: 'Good to have when you need it',
      nl: 'Goed om te hebben zodra je het nodig hebt',
    },
  },
  {
    key: 'D' as RankKeyType,
    description: {
      en: 'It was nice, but I found something else',
      nl: 'Nice, maar ik heb iets anders gevonden',
    },
  },
];

export const techItems = [
  // 0
  {
    icon: '/tech/framer-motion.svg',
    rank: ranks[0].key,
    name: 'Framer Motion',
  },
  { icon: '/tech/threejs.svg', rank: ranks[0].key, name: 'Three.js' },
  { icon: '/tech/d3.svg', rank: ranks[0].key, name: 'D3' },
  { icon: '/tech/react-spring.svg', rank: ranks[0].key, name: 'React spring' },
  { icon: '/tech/blender.svg', rank: ranks[0].key, name: 'Blender' },
  // 1
  { icon: '/tech/typescript.svg', rank: ranks[1].key, name: 'Typescript' },
  { icon: '/tech/react.svg', rank: ranks[1].key, name: 'React (Native)' },
  { icon: '/tech/nextjs.svg', rank: ranks[1].key, name: 'Next.js' },
  { icon: '/tech/nodejs.svg', rank: ranks[1].key, name: 'Node.js' },
  { icon: '/tech/react-query.svg', rank: ranks[1].key, name: 'React query' },
  {
    icon: '/tech/visual-studio-code.svg',
    rank: ranks[1].key,
    name: 'Visual Studio Code',
  },
  { icon: '/tech/eslint.svg', rank: ranks[1].key, name: 'Eslint' },
  { icon: '/tech/prettier.svg', rank: ranks[1].key, name: 'Prettier' },
  { icon: '/tech/vim.svg', rank: ranks[1].key, name: 'Vim' },
  { icon: '/tech/figma.svg', rank: ranks[1].key, name: 'Figma' },
  // 2
  { icon: '/tech/javascript.svg', rank: ranks[2].key, name: 'Javascript' },
  { icon: '/tech/sass.svg', rank: ranks[2].key, name: 'SASS' },
  { icon: '/tech/mongodb.svg', rank: ranks[2].key, name: 'Mongodb' },
  { icon: '/tech/mysql.svg', rank: ranks[2].key, name: 'MySql' },
  { icon: '/tech/webpack.svg', rank: ranks[2].key, name: 'Webpack' },
  { icon: '/tech/git.svg', rank: ranks[2].key, name: 'Git' },
  { icon: '/tech/npm.svg', rank: ranks[2].key, name: 'NPM' },
  { icon: '/tech/illustrator.svg', rank: ranks[2].key, name: 'Illustrator' },
  // 3
  { icon: '/tech/firebase.svg', rank: ranks[3].key, name: 'Firebase' },
  { icon: '/tech/digitalocean.svg', rank: ranks[3].key, name: 'Digital Ocean' },
  { icon: '/tech/google-cloud.svg', rank: ranks[3].key, name: 'Google Cloud' },
  { icon: '/tech/vercel.svg', rank: ranks[3].key, name: 'Vercel' },
  { icon: '/tech/netlify.svg', rank: ranks[3].key, name: 'Netlify' },
  { icon: '/tech/sanity.svg', rank: ranks[3].key, name: 'Sanity' },
  { icon: '/tech/graphql.svg', rank: ranks[3].key, name: 'GraphQl' },
  { icon: '/tech/laravel.svg', rank: ranks[3].key, name: 'Laravel' },
  // 4
  { icon: '/tech/redux.svg', rank: ranks[4].key, name: 'Redux' },
  { icon: '/tech/gatsby.svg', rank: ranks[4].key, name: 'Gatsby' },
  {
    icon: '/tech/styled-components.svg',
    rank: ranks[4].key,
    name: 'Styled Components',
  },
  { icon: '/tech/xd.svg', rank: ranks[4].key, name: 'XD' },
  { icon: '/tech/contentful.svg', rank: ranks[4].key, name: 'Contentful' },
  { icon: '/tech/php.svg', rank: ranks[4].key, name: 'PHP' },
];
