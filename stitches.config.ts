import { createStitches, globalCss } from '@stitches/react';

export const stitches = createStitches({
  theme: {
    colors: {
      brand: '#E41D37',
      primaryDark: '#333333',
      primaryDarkLighter: '#646466',
    },
    fonts: {
      title: 'Inter, sans-serif',
      text: 'Sora, sans-serif',
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
