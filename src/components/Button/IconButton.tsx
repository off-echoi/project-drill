import { ElementType, ReactElement, cloneElement } from 'react';
import { SizeType } from 'components/varient';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { ReaderOnlyText } from 'components';
import { UnionButtonProps } from './buttonType';

interface BaseProps {
  icon: ReactElement;
  label?: string;
  size?: SizeType;
  className?: string;
}

type IconButtonProps = UnionButtonProps<BaseProps>;

const StyledIconButton = styled.button<IconButtonProps>`
  display: block;
  ${({ size }) => {
    const sizeStyle: Record<SizeType, string> = {
      large: 'width: 32px; height: 32px;',
      medium: 'width: 28px; height: 28px;',
      normal: 'width: 24px; height: 24px;',
      small: 'width: 20px; height: 20px;',
      mini: 'width: 16px; height: 16px;',
    };
    return sizeStyle[size as SizeType];
  }}
  padding: ${theme.spacing.sm};
  cursor: pointer;
`;

export const IconButton = ({ as = 'Button', size = 'medium', label, icon, className, ...props }: IconButtonProps) => {
  const IconChild = cloneElement(icon as ReactElement, { size: '100%' });
  const Component = as as ElementType;

  return (
    <StyledIconButton as={Component} size={size} className={className} {...props}>
      <ReaderOnlyText>{label}</ReaderOnlyText>
      {IconChild}
    </StyledIconButton>
  );
};
