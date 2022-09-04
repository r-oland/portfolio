type RankKeyType = 'S' | 'A' | 'B' | 'D' | 'E';

export const ranks = [
  {
    key: 'S' as RankKeyType,
    description: 'You can wake me up for this stuff!',
  },
  { key: 'A' as RankKeyType, description: 'Could not live without it' },
  {
    key: 'B' as RankKeyType,
    description: 'I mean, it’s a standard for a reason',
  },
  { key: 'C' as RankKeyType, description: 'I like all dit' },
  {
    key: 'D' as RankKeyType,
    description: 'It was nice, but I found something better',
  },
  { key: 'E' as RankKeyType, description: 'Hate it, yet I love it' },
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
  // 1
  { icon: '/tech/typescript.svg', rank: ranks[1].key, name: 'Typescript' },
  { icon: '/tech/react.svg', rank: ranks[1].key, name: 'React' },
  { icon: '/tech/nextjs.svg', rank: ranks[1].key, name: 'Next.js' },
  {
    icon: '/tech/visual-studio-code.svg',
    rank: ranks[1].key,
    name: 'Visual Studio Code',
  },
  { icon: '/tech/eslint.svg', rank: ranks[1].key, name: 'Eslint' },
  { icon: '/tech/prettier.svg', rank: ranks[1].key, name: 'Prettier' },
  { icon: '/tech/vim.svg', rank: ranks[1].key, name: 'Vim' },
  { icon: '/tech/sass.svg', rank: ranks[1].key, name: 'SASS' },
  { icon: '/tech/figma.svg', rank: ranks[1].key, name: 'Figma' },
  // 2
  { icon: '/tech/javascript.svg', rank: ranks[2].key, name: 'Javascript' },
  { icon: '/tech/nodejs.svg', rank: ranks[2].key, name: 'Node.js' },
  { icon: '/tech/mongodb.svg', rank: ranks[2].key, name: 'Mongodb' },
  { icon: '/tech/mysql.svg', rank: ranks[2].key, name: 'MySql' },
  { icon: '/tech/webpack.svg', rank: ranks[2].key, name: 'Webpack' },
  { icon: '/tech/git.svg', rank: ranks[2].key, name: 'Git' },
  { icon: '/tech/npm.svg', rank: ranks[2].key, name: 'NPM' },
  { icon: '/tech/illustrator.svg', rank: ranks[2].key, name: 'Illustrator' },
  { icon: '/tech/photoshop.svg', rank: ranks[2].key, name: 'Photoshop' },
  // 3
  { icon: '/tech/firebase.svg', rank: ranks[3].key, name: 'Firebase' },
  { icon: '/tech/digitalocean.svg', rank: ranks[3].key, name: 'Digital Ocean' },
  { icon: '/tech/google-cloud.svg', rank: ranks[3].key, name: 'Google Cloud' },
  { icon: '/tech/netlify.svg', rank: ranks[3].key, name: 'Netlify' },
  { icon: '/tech/vercel.svg', rank: ranks[3].key, name: 'Vercel' },
  { icon: '/tech/sanity.svg', rank: ranks[3].key, name: 'Sanity' },
  { icon: '/tech/graphql.svg', rank: ranks[3].key, name: 'GraphQl' },
  { icon: '/tech/laravel.svg', rank: ranks[3].key, name: 'Laravel' },
  // 4
  { icon: '/tech/gatsby.svg', rank: ranks[4].key, name: 'Gatsby' },
  {
    icon: '/tech/styled-components.svg',
    rank: ranks[4].key,
    name: 'Styled Components',
  },
  { icon: '/tech/xd.svg', rank: ranks[4].key, name: 'XD' },
  { icon: '/tech/contentful.svg', rank: ranks[4].key, name: 'Contentful' },
  // 5
  { icon: '/tech/css.svg', rank: ranks[5].key, name: 'CSS' },
  { icon: '/tech/html.svg', rank: ranks[5].key, name: 'HTML' },
  { icon: '/tech/php.svg', rank: ranks[5].key, name: 'PHP' },
];
