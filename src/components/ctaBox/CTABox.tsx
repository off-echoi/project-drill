import styled from 'styled-components';
import { theme } from 'styles/theme';
import { InfoIcon, MinusCircleIcon, Typography } from 'components';

interface CTABoxProps {
  title?: string;
  content: string;
  ctaType?: 'info' | 'error' | 'basic';
  className?: string;
}

const StyledDiv = styled.div`
  background: ${theme.color.grayg8};
  border-radius: ${theme.rounded.md};
  border: 1px solid ${theme.color.gray8};
  padding: ${theme.spacing.xxl};
  margin-bottom: ${theme.spacing.xxl};
  text-align: center;
  svg {
    margin-bottom: ${theme.spacing.sm};
  }
  .title {
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const CTABox = ({ title, content, ctaType = 'info', className }: CTABoxProps) => {
  return (
    <StyledDiv className={className}>
      {ctaType !== 'basic' && (
        <>
          {ctaType === 'info' && <InfoIcon size={20} color={theme.color.gray5} />}
          {ctaType === 'error' && <MinusCircleIcon size={20} color={theme.color.accent} />}
        </>
      )}
      {title && (
        <Typography typotype="sub2" align="center" color={theme.color.sub2} className="title">
          {title}
        </Typography>
      )}
      {content && (
        <>
          <Typography typotype="body2" align="center" color={theme.color.gray5}>
            {content}
          </Typography>
        </>
      )}
    </StyledDiv>
  );
};
