import { ReactNode } from 'react';
import styled from 'styled-components';

const StyledReaderOnlyText = styled.span`
  overflow: hidden;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
`;

export const ReaderOnlyText = ({ children }: { children: ReactNode }) => {
  return <StyledReaderOnlyText>{children}</StyledReaderOnlyText>;
};
