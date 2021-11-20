/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardList, Typo } from '@components/index'
import { memo } from 'react'
import Header from '@layouts/Header'

type ContentType = {
  title: string
  date: string
  userName: string
  href: string // TODO: 오브젝트 형태로바꾸끼
  answerYN?: boolean // 질문, 답변 게시판용
}

const qnaContent: ContentType[] = [
  {
    title: 'do와 관련하여 질문있습니다.',
    date: '2021-11-01',
    userName: '김회원',
    href: '/qna/detail',
    answerYN: false,
  },
  {
    title: 'The population is/are increasing 주어가 3인칭 단수라서 단수동사인 is를 쓰잖아요',
    date: '2021-10-28',
    userName: '김회원',
    href: '/qna/detail',
    answerYN: true,
  },
  {
    title: 'The population is/are increasing 주어가 3인칭 단수라서 단수동사인 is를 쓰잖아요',
    date: '2021-10-28',
    userName: '김회원',
    href: '/qna/detail',
    answerYN: true,
  },
]

function QuestionList() {
  return (
    <>
      <Header pageName="질문 & 답변">{/* <button>글쓰기(회원 전용 기능)</button> */}</Header>
      <section className="header_section" css={style}>
        <Typo type="pageNotice">회원님이 게시한 질문입니다. \n 내용을 확인하고 답변을 달아주세요.</Typo>
        <BoardList content={qnaContent} />
      </section>
    </>
  )
}
const style = css``
export default memo(QuestionList)
