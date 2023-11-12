import { LabelHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
}

const StyledLabel = styled.label`
  padding: ${theme.spacing.md};
  font-size: ${theme.typography.size.sm};
  + input {
    margin-left: ${theme.spacing.sm};
  }
`;

export const Label = ({ htmlFor, children, ...props }: LabelProps) => {
  return (
    <StyledLabel htmlFor={htmlFor} {...props}>
      {children}
    </StyledLabel>
  );
};
