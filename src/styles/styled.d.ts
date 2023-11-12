import 'styled-components';
import { HeightTypes, ColorsTypes, TypographyTypes, SpacingTypes, ShadowTypes, RoundedTypes, ZIndexTypes, BPTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    bp: BPTypes;
    height: HeightTypes;
    color: ColorsTypes;
    typography: TypographyTypes;
    spacing: SpacingTypes;
    shadow: ShadowTypes;
    rounded: RoundedTypes;
    zIndex: ZIndexTypes;
  }
}
