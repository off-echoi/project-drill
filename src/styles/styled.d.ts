import 'styled-components';
import { ColorsTypes, TypographyTypes, SpacingTypes, ShadowTypes, RoundedTypes, ZIndexTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorsTypes;
    typography: TypographyTypes;
    spacing: SpacingTypes;
    shadow: ShadowTypes;
    rounded: RoundedTypes;
    zIndex: ZIndexTypes;
  }
}
