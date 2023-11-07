import { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { AlignType } from 'components/varient';
import { getStyleBasedOnCondition } from 'styles/styledUtils';
import { ColorTypes } from 'styles/theme';

interface TypographyProps {
  typoType: 'heading1' | 'heading2' | 'heading3' | 'sub1' | 'sub2' | 'sub3' | 'body1' | 'body2' | 'body3' | 'caption1' | 'caption2' | 'caption3';
  as?: ElementType;
  color?: ColorTypes;
  align?: AlignType;
  children: string | ReactNode;
}

const StyledTypography = styled.div<TypographyProps>`
  line-height: 1.4;
  text-align: ${({ align }) => align};

  ${({ color, theme }) =>
    getStyleBasedOnCondition(
      //
      Boolean(color),
      `color: ${color};`,
      `color: ${theme.color.gray3};`
    )}
  ${({ typoType, theme }) => {
    switch (typoType) {
      case 'heading1':
        return `
        font-size: ${theme.typography.size.xxl};
        font-weight: ${theme.typography.weight.extrabold};
        `;
      case 'heading2':
        return `
        font-size: ${theme.typography.size.xl};
        font-weight: ${theme.typography.weight.extrabold};
        `;
      case 'heading3':
        return `
        font-size: ${theme.typography.size.lg};
        font-weight: ${theme.typography.weight.extrabold};
        `;
      case 'sub1':
        return `
        font-size: ${theme.typography.size.lg};
        font-weight: ${theme.typography.weight.bold};
        `;
      case 'sub2':
        return `
        font-size: ${theme.typography.size.md};
        font-weight: ${theme.typography.weight.bold};
        `;
      case 'sub3':
        return `
        font-size: ${theme.typography.size.sm};
        font-weight: ${theme.typography.weight.bold};
        `;
      case 'body1':
        return `
        font-size: ${theme.typography.size.md};
        font-weight: ${theme.typography.weight.normal};
        `;
      case 'body2':
        return `
        font-size: ${theme.typography.size.sm};
        font-weight: ${theme.typography.weight.normal};
        `;
      case 'body3':
        return `
        font-size: ${theme.typography.size.xs};
        font-weight: ${theme.typography.weight.normal};
        `;
      case 'caption1':
        return `
        font-size: ${theme.typography.size.md};
        font-weight: ${theme.typography.weight.bold};
        `;
      case 'caption2':
        return `
        font-size: ${theme.typography.size.sm};
        font-weight: ${theme.typography.weight.bold};
        `;
      case 'caption3':
        return `
        font-size: ${theme.typography.size.xs};
        font-weight: ${theme.typography.weight.bold};
        `;
      default:
        return `
        font-size: ${theme.typography.size.sm};
        font-weight: ${theme.typography.weight.normal};
        `;
    }
  }}
`;

export const Typography = ({ typoType = 'body2', align = 'left', as, color, children }: TypographyProps) => {
  // typoType에 따라 component의 ElementType변경
  const getAsElement = () => {
    switch (typoType) {
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
    <StyledTypography as={Component} color={color} typoType={typoType} align={align}>
      {children}
    </StyledTypography>
  );
};
