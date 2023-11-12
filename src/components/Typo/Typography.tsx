import { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { AlignType } from 'components/varient';
import { getStyleBasedOnCondition } from 'styles/styledUtils';
import { ColorTypes, theme } from 'styles/theme';

interface TypographyProps {
  typotype: 'heading1' | 'heading2' | 'heading3' | 'sub1' | 'sub2' | 'sub3' | 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2' | 'caption3';
  as?: ElementType;
  color?: ColorTypes;
  align?: AlignType;
  children: string | ReactNode;
  className?: string;
}

const StyledTypography = styled.div<TypographyProps>`
  line-height: 1.4;
  text-align: ${({ align }) => align};

  ${({ color }) =>
    getStyleBasedOnCondition(
      //
      Boolean(color),
      `color: ${color};`,
      `color: ${theme.color.gray3};`
    )}
  ${({ typotype }) => {
    const typoTheme = {
      heading1: `font-size: ${theme.typography.size.xxl};
                 font-weight: ${theme.typography.weight.extrabold};`,
      heading2: `font-size: ${theme.typography.size.xl};
                  font-weight: ${theme.typography.weight.extrabold};`,
      heading3: `font-size: ${theme.typography.size.lg};
                 font-weight: ${theme.typography.weight.extrabold};`,
      sub1: `font-size: ${theme.typography.size.lg};
             font-weight: ${theme.typography.weight.bold};`,
      sub2: `font-size: ${theme.typography.size.md};
             font-weight: ${theme.typography.weight.bold};`,
      sub3: `font-size: ${theme.typography.size.sm};
             font-weight: ${theme.typography.weight.bold};`,
      body1: `font-size: ${theme.typography.size.md};
              font-weight: ${theme.typography.weight.normal};`,
      body2: `font-size: ${theme.typography.size.sm};
              font-weight: ${theme.typography.weight.normal};`,
      body3: `font-size: ${theme.typography.size.xs};
              font-weight: ${theme.typography.weight.normal};`,
      caption1: `font-size: ${theme.typography.size.md};
                 font-weight: ${theme.typography.weight.bold};`,
      caption2: `font-size: ${theme.typography.size.sm};
                 font-weight: ${theme.typography.weight.bold};`,
      caption3: `font-size: ${theme.typography.size.xs};
                 font-weight: ${theme.typography.weight.bold};`,
    };
    return typoTheme[typotype];
  }}
`;

export const Typography = ({ typotype = 'body2', align = 'left', as, color, children, className = '' }: TypographyProps) => {
  // typoType에 따라 component의 ElementType변경
  const getAsElement = () => {
    switch (typotype) {
      case 'heading1':
        return 'h1';
      case 'heading2':
        return 'h2';
      case 'heading3':
        return 'h3';
      case 'sub1':
        return 'h4';
      case 'sub2':
        return 'h5';
      case 'sub3':
        return 'h6';
      case 'body1':
      case 'body2':
      case 'body3':
        return 'p';
      case 'caption1':
      case 'caption2':
      case 'caption3':
        return 'span';
      default:
        return 'span';
    }
  };

  const Component = as || getAsElement();

  return (
    <StyledTypography as={Component} color={color} typotype={typotype} align={align} className={className}>
      {children}
    </StyledTypography>
  );
};
