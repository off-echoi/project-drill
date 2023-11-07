import { NoContentIcon, Typography } from 'components';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

interface NoContentProps {
  content?: string;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contenr: center;
  gap: ${theme.spacing.xxl};
  padding: ${theme.spacing.xl} 0;
`;

export const NoContent = ({ content }: NoContentProps) => {
  return (
    <StyledDiv>
      <NoContentIcon size={60} color={theme.color.secondary2} />
      <Typography typoType="body2" color={theme.color.gray4}>
        {content || '찾으시는 정보가 없습니다.'}
      </Typography>
    </StyledDiv>
  );
};

export default NoContent;
