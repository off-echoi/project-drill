/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react'
import { memo } from 'react'
import { Link } from 'react-router-dom'

type BoardListType = {
  title: string
  date: string
  userName: string
  href: string // TODO: 오브젝트 형태로바꾸끼
  answerYN?: boolean // 질문, 답변 게시판용
}

function BoardList({ title, date, userName, href, answerYN }: BoardListType) {
  return (
    <li className="board_list" css={style}>
      <div className="board_left">
        <Link to={href} className={`board_title ${answerYN && 'badge_answer'}`}>
          {title}
        </Link>
        <span className="board_user">{userName}</span>
      </div>
      <span className="board_date">{date}</span>
    </li>
  )
}
const style = css({
  boxSizing: 'border-box',
  width: 300,
  height: 200,
  border: '10px solid blue',
})

export default memo(BoardList)
