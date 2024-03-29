import { NoContentIcon, Typography } from 'components';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

interface NoContentProps {
  content?: string;
  className?: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contenr: center;
  gap: ${theme.spacing.xxl};
  padding: ${theme.spacing.xl} 0;
`;

export const NoContent = ({ content, className }: NoContentProps) => {
  return (
    <StyledDiv className={className}>
      <NoContentIcon size={60} color={theme.color.gray7} />
      <Typography typotype="body2" color={theme.color.gray4}>
        {content || '찾으시는 내용이 없습니다.'}
      </Typography>
    </StyledDiv>
  );
};

export default NoContent;
