import { DefaultTheme } from 'styled-components';

const HEIGHT = {
  bottomNav: '52px',
  header: '42px',
} as const;

const BREAK_POINT = {
  md: '768px',
  sm: '576px',
} as const;

const COLOR = {
  primary1: '#2778e9',
  primary2: '#161b75',
  secondary1: '#51abf3',
  secondary2: '#33b893',
  gray1: '#000000',
  gray2: '#303030',
  gray3: '#505050',
  gray4: '#707070',
  gray5: '#909090',
  gray6: '#a0a0a0',
  gray7: '#c0c0c0',
  gray8: '#e0e0e0',
  gray9: '#f5f5f5',
  white: '#ffffff',
  accent: '#ee264a',
} as const;

const TYPOGRAPHY = {
  weight: {
    thin: '300',
    regular: '400',
    normal: '500',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    xxl: '24px',
    xl: '20px',
    lg: '18px',
    md: '16px',
    sm: '14px',
    xs: '12px',
    xxs: '10px',
  },
} as const;

const SPACING = {
  none: 0,
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '20px',
} as const;

const SHADOW = {
  sm: {
    top: '0 -2px 5px 0px rgba(0, 0, 0, 0.05)',
    bottom: '0 2px 5px 0px rgba(0, 0, 0, 0.25)',
  },
  md: {
    top: '0 -2px 10px 0px rgba(0, 0, 0, 0.05)',
    bottom: '0 2px 10px 0px rgba(0, 0, 0, 0.25)',
  },
} as const;

const ROUNDED = {
  none: 0,
  xs: '2px',
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  xxl: '9999px',
  full: '100%',
} as const;

const Z_INDEX = {
  minimum: -100,
  lowest: 1,
  lower: 25,
  low: 50,
  base: 75,
  high: 100,
  higher: 125,
  highest: 150,
  maximum: 1000,
} as const;

export type BPTypes = typeof BREAK_POINT;
export type HeightTypes = typeof HEIGHT;
export type ColorTypes = typeof COLOR;
export type TypographyTypes = typeof TYPOGRAPHY;
export type SpacingTypes = typeof SPACING;
export type ShadowTypes = typeof SHADOW;
export type RoundedTypes = typeof ROUNDED;
export type ZIndexTypes = typeof Z_INDEX;

export const theme: DefaultTheme = {
  bp: BREAK_POINT,
  height: HEIGHT,
  color: COLOR,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  shadow: SHADOW,
  rounded: ROUNDED,
  zIndex: Z_INDEX,
};
