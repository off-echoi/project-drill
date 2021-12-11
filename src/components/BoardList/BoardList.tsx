/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo } from 'react'
import { Link } from 'react-router-dom'

type ContentType = {
  subject: string
  createdAt: string
  id: string | number
  path: string
  userName: string
  answerYN?: boolean // 질문, 답변 게시판용
}
type BoardListType = {
  addClassName?: string
  loading?: boolean
  content: ContentType[] | []
}

function BoardList({ addClassName, loading = true, content }: BoardListType) {
  return (
    <ul css={style} className={addClassName}>
      {loading ? (
        <></>
      ) : (
        <>
          {content.length ? (
            content.map(({ subject, createdAt, id, path, userName, answerYN }: ContentType, idx) => {
              return (
                <li className="board_list" key={id}>
                  {answerYN && <span className="badge_answer">V</span>}
                  <div className="board_left">
                    <Link to={`${path}?id=${id}`} className="board_title">
                      {subject}
                    </Link>
                  </div>
                  <div className="board_right">
                    <span className="board_user">{userName}</span>
                    <span className="board_date">{createdAt}</span>
                  </div>
                </li>
              )
            })
          ) : (
            <li className="empty_list">게시글이 없습니다.</li>
          )}
        </>
      )}
    </ul>
  )
}
const style = css`
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
`

export default memo(BoardList)
