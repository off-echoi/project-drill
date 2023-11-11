import { InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'search' | 'email' | 'password' | 'tel' | 'url';
  width?: string | number;
  className?: string;
}

const StyledInput = styled.input<InputProps>`
  width: ${({ width }) => (typeof width === 'number' ? width + 'px' : width)};
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.color.gray8};
  border-radius: ${theme.rounded.sm};
  font-size: ${theme.typography.size.sm};
  &:read-only {
    border: none;
    pointer-events: none;
  }
`;

export const InputV2 = forwardRef<HTMLInputElement, InputProps>(
  ({ type = 'text', name, id, value, className, width = '100%', ...props }: InputProps, ref) => {
    return (
      <StyledInput
        type={type} //
        name={name}
        id={id}
        value={value}
        width={width}
        autoComplete="off"
        ref={ref}
        {...props}
      />
    );
  }
);

InputV2.displayName = 'InputV2';
