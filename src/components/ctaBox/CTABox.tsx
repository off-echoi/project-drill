import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Typography } from 'components';

interface CTABoxProps {
  title?: string;
  content: string;
}

const StyledDiv = styled.div`
  background: ${theme.color.grayg8};
  border-radius: ${theme.rounded.md};
  border: 1px solid ${theme.color.gray8};
  padding: ${theme.spacing.xxl};
  .title {
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const CTABox = ({ title, content }: CTABoxProps) => {
  return (
    <StyledDiv>
      {title && (
        <Typography typotype="sub2" align="center" color={theme.color.sub2} className="title">
          {title}
        </Typography>
      )}
      {content && (
        <Typography typotype="body2" align="center" color={theme.color.gray5}>
          {content}
        </Typography>
      )}
    </StyledDiv>
  );
};
