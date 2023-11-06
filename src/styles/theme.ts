import { DefaultTheme } from 'styled-components';

const COLOR = {
  primary1: '#2778e9',
  primary2: '#161b75',
  secondary1: '#a5bcff',
  secondary2: '#162b5b',
  gray1: '#000000',
  gray2: '#303030',
  gray3: '#505050',
  gray4: '#707070',
  gray5: '#909090',
  gray6: '#a0a0a0',
  gray7: '#c0c0c0',
  gray8: '#e0e0e0',
  gray9: '#f0f0f0',
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
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '24px',
    heading1: '28px',
    heading2: '32px',
    heading3: '36px',
    heading4: '40px',
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

export type ColorTypes = typeof COLOR;
export type TypographyTypes = typeof TYPOGRAPHY;
export type SpacingTypes = typeof SPACING;
export type ShadowTypes = typeof SHADOW;
export type RoundedTypes = typeof ROUNDED;
export type ZIndexTypes = typeof Z_INDEX;

export const theme: DefaultTheme = {
  color: COLOR,
  typography: TYPOGRAPHY,
  spacing: SPACING,
  shadow: SHADOW,
  rounded: ROUNDED,
  zIndex: Z_INDEX,
};
