/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardList, Typo } from 'components/index'
import Header from 'layouts/Header'

type ContentType = {
  subject: string
  createdAt: string
  id: string | number
  path: string
  userName: string
  answerYN?: boolean // 질문, 답변 게시판용
}

const qnaContent: ContentType[] = [
  {
    subject: 'do와 관련하여 질문있습니다.',
    createdAt: '2021-11-01',
    userName: '김회원',
    path: '/qna/detail',
    answerYN: false,
    id: 4,
  },
  {
    subject: 'The population is/are increasing 주어가 3인칭 단수라서 단수동사인 is를 쓰잖아요',
    createdAt: '2021-10-28',
    userName: '김회원',
    path: '/qna/detail',
    answerYN: true,
    id: 5,
  },
  {
    subject: '문제를 풀다가 "My brother is sitting watching TV."라는 문장을 봤습니다.',
    createdAt: '2021-10-28',
    userName: '김회원',
    path: '/qna/detail',
    answerYN: true,
    id: 6,
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
export default QuestionList
