import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface InputType extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'text' | 'number' | 'search' | 'email' | 'password' | 'tel' | 'url';
  width?: string | number;
  className?: string;
}

const StyledInput = styled.input<InputType>`
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

export const InputV2 = ({ type = 'text', name, id, value, onChange, className, width = '100%', ...props }: InputType) => {
  return (
    <StyledInput
      type={type} //
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      width={width}
      {...props}
    />
  );
};
