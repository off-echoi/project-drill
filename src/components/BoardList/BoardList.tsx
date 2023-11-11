import COLORS from 'constants/colors';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { Typography } from 'components';

type ContentType = {
  subject: string;
  createdAt: string;
  id: string | number;
  path: string;
  userName: string;
  answerYN?: boolean; // 질문, 답변 게시판용
};

interface BoardListProps {
  content: ContentType[] | [];
  loading?: any; // TODO: 삭제 예정
}

const StyledBoardUl = styled.ul`
  border-top: ${({ theme }) => `2px solid ${theme.color.gray5}`};
  border-bottom: ${({ theme }) => `2px solid ${theme.color.gray5}`};
  font-size: ${({ theme }) => `${theme.typography.size.md}`};
`;
const StyledBoardLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.sm}`};
  & + li {
    border-top: ${({ theme }) => `1px solid ${theme.color.gray5}`};
  }
`;

export const BoardList = ({ content }: BoardListProps) => {
  return (
    <StyledBoardUl>
      <>
        {content.length ? (
          content.map(({ subject, createdAt, id, path, userName, answerYN }: ContentType, idx) => {
            return (
              <StyledBoardLi key={id}>
                {answerYN && <span className="badge_answer">V</span>}
                <div className="board_left">
                  <Link to={`${path}?id=${id}`} className="board_title">
                    <Typography as="span" typotype="body2">
                      {subject}
                    </Typography>
                  </Link>
                </div>
                <div className="board_right">
                  <span className="board_user">{userName}</span>
                  <span className="board_date">{createdAt}</span>
                </div>
              </StyledBoardLi>
            );
          })
        ) : (
          <li className="empty_list">게시글이 없습니다.</li>
        )}
      </>
    </StyledBoardUl>
  );
};
const style = `
  margin-bottom: 10rem;
  border-top: 2rem solid ${COLORS.SecondGray};
  border-bottom: 2rem solid ${COLORS.SecondGray};
  font-size: 15rem;
  .empty_list {
    padding: 30rem 0rem;
    text-align: center;
  }
  .board_list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10rem 5rem;
    & + .board_list {
      border-top: 1rem solid ${COLORS.LightGray};
    }
  }
  .board_left {
    flex: 1;
  }
  .board_left a {
    overflow: hidden;
    display: -webkit-box;
    width: 95%;
    padding-left: 5rem;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3;
  }
  .badge_answer {
    display: block;
    top: 0;
    bottom: 0;
    width: 17rem;
    height: 17rem;
    margin: auto;
    border-radius: 100%;
    background: ${COLORS.PrimaryBlue};
    color: #ffffff;
    text-align: center;
    line-height: 17rem;
    font-size: 10rem;
  }
  .board_right {
    flex: 0 75rem;
    font-size: 12rem;
  }
  .board_right span {
    display: block;
    padding: 2.5rem 0;
  }
`;
