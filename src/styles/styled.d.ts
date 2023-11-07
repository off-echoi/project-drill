import 'styled-components';
import { HeightTypes, ColorsTypes, TypographyTypes, SpacingTypes, ShadowTypes, RoundedTypes, ZIndexTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    height: HeightTypes;
    color: ColorsTypes;
    typography: TypographyTypes;
    spacing: SpacingTypes;
    shadow: ShadowTypes;
    rounded: RoundedTypes;
    zIndex: ZIndexTypes;
  }
}
