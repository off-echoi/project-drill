import { ElementType, ReactNode } from 'react';
import { UnionButtonProps } from './buttonType';
import { FullType, SizeType, ThemeType } from 'components/varient';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

type BaseProps = {
  size?: SizeType;
  width?: FullType | string | number;
  colorTheme?: ThemeType;
  className?: string;
  isTextButton?: boolean;
  rounded?: keyof typeof theme.rounded;
  children?: ReactNode;
};

type ButtonProps = UnionButtonProps<BaseProps>;

const StyledButton = styled.button<ButtonProps>`
  display: block;
  ${({ size, width, colorTheme, isTextButton }) => {
    let concatStyle = '';
    const sizeStyle: Record<SizeType, string> = {
      large: `padding: ${theme.spacing.xl}; font-size: ${theme.typography.size.lg}; `,
      medium: `padding: ${theme.spacing.lg}; font-size: ${theme.typography.size.md}; `,
      normal: `padding: ${theme.spacing.md}; font-size: ${theme.typography.size.sm}; `,
      small: `padding: ${theme.spacing.sm}; font-size: ${theme.typography.size.xs}; `,
      mini: `padding: ${theme.spacing.xs}; font-size: ${theme.typography.size.xxs}; `,
    };

    concatStyle = sizeStyle[size as SizeType];

    if ((width as FullType) === 'full') {
      concatStyle += 'width: 100%; ';
    } else if ((width as FullType) === 'half') {
      concatStyle += 'width: 50%; ';
    } else if (typeof width === 'string') {
      concatStyle += `width: ${width}; `;
    } else if (typeof width === 'number') {
      concatStyle += `width: ${width}px; `;
    }

    const colorStyle: Record<ThemeType, string> = {
      primary: `background: ${theme.color.primary1};
                border: 1px solid ${theme.color.primary1};
                color: ${theme.color.white}; `,
      secondary: `background: ${theme.color.secondary2};
                  border: 1px solid ${theme.color.secondary2};
                  color: ${theme.color.white}; `,
      tertiary: `background: ${theme.color.white};
                 border: 1px solid ${theme.color.gray7};
                 color: ${theme.color.gray1}; `,
      accent: `background: ${theme.color.accent};
              border: 1px solid ${theme.color.accent};
              color: ${theme.color.white}; `,
    };

    if (isTextButton) {
      colorStyle.primary = `color: ${theme.color.primary1}; `;
      colorStyle.secondary = `color: ${theme.color.secondary}; `;
      colorStyle.tertiary = `color: ${theme.color.gray7}; `;
      colorStyle.accent = `color: ${theme.color.accent}; `;
    }

    concatStyle += colorStyle[colorTheme as ThemeType];

    return concatStyle + ' ';
  }}
  border-radius: ${({ rounded }) => theme.rounded[rounded as keyof typeof theme.rounded]};
  cursor: pointer;
  text-align: center;
  &:disabled {
    background: ${theme.color.gray8};
    border: 1px solid ${theme.color.gray8};
    color: ${theme.color.gray4};
    pointer-events: none;
    cursor: none;
  }
`;

export function ButtonV2({
  as = 'Button',
  size = 'medium',
  width = 'full',
  colorTheme = 'primary',
  rounded = 'none',
  isTextButton = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = as as ElementType;
  return (
    <StyledButton
      as={Component}
      size={size}
      width={width}
      colorTheme={colorTheme}
      rounded={rounded}
      isTextButton={isTextButton}
      className={className}
      {...props}>
      {children}
    </StyledButton>
  );
}
