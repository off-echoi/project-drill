import { Badge, Typography } from 'components/index';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { BaseBoardContentType } from 'types/board';
import { formattingDate, getDiffDates, getToday } from 'utils/dateUtils';

type NoticeTitleProps = Pick<BaseBoardContentType, 'title' | 'createdAt'>;

const StyledTitle = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
  margin-bottom: ${theme.spacing.sm};
`;
export const NoticeTitle = ({ title, createdAt }: NoticeTitleProps) => {
  return (
    <div>
      <StyledTitle>
        {getDiffDates(getToday(), createdAt) < 30 && <Badge $colorTheme="secondary">new</Badge>}

        <Typography typotype="sub3">{title}</Typography>
      </StyledTitle>
      <Typography typotype="body3" color={theme.color.gray6}>
        {formattingDate(createdAt)}
      </Typography>
    </div>
  );
};
