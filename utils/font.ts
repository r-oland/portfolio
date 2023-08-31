// eslint-disable-next-line camelcase
import { Inter, Zen_Antique } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const zenAntique = Zen_Antique({
  weight: '400',
  variable: '--zen',
  subsets: ['latin'],
  display: 'swap',
});
