import { createStitches, globalCss } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      brand: '#E41D37',
      primaryDark: '#333333',
      primaryDarkLighter: '#646466',
    },
    fonts: {
      text: 'Inter, sans-serif',
      title: 'Sora, sans-serif',
    },

    fontWeights: {
      semiBold: 600,
      medium: 500,
      regular: 400,
      light: 300,
    },
  },
});

globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'a, button': { color: 'inherit' },

  a: { textDecoration: 'none' },

  button: { color: 'inherit' },

  '.flex': { display: 'flex' },

  'ul, ol': { listStyle: 'none' },
})();
