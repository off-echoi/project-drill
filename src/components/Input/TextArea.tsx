import { TextareaHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string | number;
  height?: string | number;
  className?: string;
}

const StyledTeaxArea = styled.textarea<TextareaProps>`
  width: ${({ width }) => (typeof width === 'number' ? width + 'px' : width)};
  height: ${({ height }) => (typeof height === 'number' ? height + 'px' : height)};
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.color.gray8};
  border-radius: ${theme.rounded.sm};
  font-size: ${theme.typography.size.sm};
  resize: vertical;
  &:read-only {
    border: none;
    pointer-events: none;
  }
`;

export const TextArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ name, id, value, className, width = '100%', height = '100px', ...props }: TextareaProps, ref) => {
    return (
      <StyledTeaxArea
        name={name} //
        id={id}
        value={value}
        width={width}
        height={height}
        ref={ref}
        {...props}
        autoComplete="off"
      />
    );
  }
);

TextArea.displayName = 'TextArea';
