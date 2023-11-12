import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

interface MainProps {
  className?: string;
  children: ReactNode;
}

const StyledMain = styled.main`
  flex-grow: 1;
  position: relative;
  width: 100%;
  max-width: ${theme.bp.md};
  min-height: calc(100dvh - (${theme.height.bottomNav} + ${theme.height.header}));
  margin: 0 auto;
  background: ${theme.color.white};
  padding: ${theme.spacing.xxl};
  margin-bottom: ${theme.height.bottomNav};
`;
export const Main = ({ className = '', children }: MainProps) => {
  return <StyledMain className={className}>{children}</StyledMain>;
};
