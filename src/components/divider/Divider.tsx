import { SpacingType } from 'components/varient';
import { styled } from 'styled-components';
import { ColorTypes, theme } from 'styles/theme';

interface DividerProps {
  $hrType?: 'line' | 'solid';
  $color?: keyof ColorTypes;
  $spacingY?: SpacingType;
}
const StyledHr = styled.hr<DividerProps>`
  display: block;
  border: none;
  border-bottom: ${({ $color }) => `1px solid ${$color};`}
  border-width: ${({ $hrType }) => `${$hrType === 'line' ? '1px' : '4px'}`};
    ${({ $spacingY }) => {
      if (!$spacingY) return;
      const marginStyle: Record<SpacingType, string> = {
        large: theme.spacing.xl,
        medium: theme.spacing.lg,
        normal: theme.spacing.md,
        small: theme.spacing.sm,
        mini: theme.spacing.xs,
      };
      return `margin:${marginStyle[$spacingY]} ${theme.spacing.none};`;
    }};
`;
export const Divider = ({ $hrType = 'line', $color = theme.color.gray8, $spacingY }: DividerProps) => {
  return <StyledHr $color={$color} $hrType={$hrType} $spacingY={$spacingY}></StyledHr>;
};
