/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardList, Button, Typo } from '@components/index'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { goPage } from '@/modules'
import Header from '@layouts/Header'
import { ReactComponent as Write } from '@assets/icon_write.svg'
// import { useGoPage } from '@/hook/useGoPage'

type ContentType = {
  title: string
  date: string
  userName: string
  href: string // TODO: 오브젝트 형태로바꾸끼
  answerYN?: boolean // 질문, 답변 게시판용
}

const taskContent: ContentType[] = [
  {
    title: '10월 4주차 과제입니다.',
    date: '2021-10-18',
    userName: '최선생',
    href: '/task/detail',
  },
  {
    title: '10월 3주차 과제입니다.',
    date: '2021-10-09',
    userName: '최선생',
    href: '/task/detail',
  },
  {
    title: '10월 2주차 과제입니다.',
    date: '2021-10-01',
    userName: '최선생',
    href: '/task/detail',
  },
]
function TaskList() {
  const history = useHistory()

  const goToPage = useCallback(
    (url) => {
      goPage(url, history)
    },
    [history]
  )
  return (
    <>
      <Header pageName="과제">
        <Button type="icon" onClick={() => goToPage('/task/write')} addClassName="btn_gray">
          <Write />
          <span className="hidden">과제 등록</span>
        </Button>
      </Header>
      <section className="header_section" css={style}>
        <Typo type="pageNotice">회원님이 해올 수업과제를 등록해주세요.</Typo>
        <BoardList content={taskContent} />
      </section>
    </>
  )
}
const style = css``
export default TaskList
