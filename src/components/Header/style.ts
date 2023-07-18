import { stitches } from '../../../stitches.config';

const { styled } = stitches;

export const HeaderContainer = styled('header', {
  '&, .header__left-side, .header__menu-items, a, .header__right-side a': {
    alignItems: 'center',
  },

  justifyContent: 'space-between',
  fontFamily: '$text',
  fontWeight: '$medium',
  fontSize: '1.125rem',
  padding: '2rem .5rem',
  position: 'fixed',
  left: '50%',
  width: '100%',
  maxWidth: 1300,
  transform: 'translateX(-50%)',

  '.header__left-side': {
    justifyContent: 'space-around',
    gap: '2.5rem',

    '.header__menu-items': {
      gap: '2rem',

      a: {
        display: 'flex',
        gap: '.75rem',
        transition: '250ms',

        svg: { transition: '250ms' },

        '&:hover': {
          color: '$brand',

          '& svg': { transform: 'rotate(180deg)' },
        },
      },
    },
  },

  '.header__right-side a  ': { gap: '.5rem' },
});
