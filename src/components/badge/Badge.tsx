import { ThemeType } from 'components/varient';
import { ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface BadgeProps {
  $colorTheme?: ThemeType;
  children: ReactNode;
}
const StyledSpan = styled.span<BadgeProps>`
  display: inline-block;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  ${({ $colorTheme }) => {
    const colorStyle: Record<ThemeType, string> = {
      primary: `background: ${theme.color.primary1};
                border: 1px solid ${theme.color.primary1};
                color: ${theme.color.white}; `,
      secondary: `background: ${theme.color.secondary1};
                  border: 1px solid ${theme.color.secondary1};
                  color: ${theme.color.white}; `,
      tertiary: `background: ${theme.color.secondary2};
                 border: 1px solid ${theme.color.secondary2};
                 color: ${theme.color.white}; `,
      accent: `background: ${theme.color.accent};
              border: 1px solid ${theme.color.accent};
              color: ${theme.color.white}; `,
    };
    return colorStyle[$colorTheme as ThemeType];
  }}
  border-radius: ${theme.rounded.sm};
  font-size: ${theme.typography.size.xxs};
`;
export const Badge = ({ $colorTheme = 'primary', children }: BadgeProps) => {
  return (
    <StyledSpan className="badge" $colorTheme={$colorTheme}>
      {children}
    </StyledSpan>
  );
};
