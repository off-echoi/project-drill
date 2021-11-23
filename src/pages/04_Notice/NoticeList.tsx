/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardList, Button, Typo } from '@components/index'
import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { goPage } from '@/modules'
import Header from '@layouts/Header'
import { ReactComponent as Write } from '@assets/icon_write.svg'

type ContentType = {
  title: string
  date: string
  userName: string
  href: string // TODO: 오브젝트 형태로바꾸끼
  answerYN?: boolean // 질문, 답변 게시판용
}

const noticeContent: ContentType[] = [
  {
    title: '10월 20일 수업은 11월 1일에 보강하겠습니다.',
    date: '2021-11-01',
    userName: '최선생',
    href: '/notice/detail',
  },
]

function NoticeList() {
  const history = useHistory()

  const goToPage = useCallback(
    (url) => {
      goPage(url, history)
    },
    [history]
  )

  return (
    <>
      <Header pageName="공지사항">
        <Button type="icon" onClick={() => goToPage('/notice/write')} addClassName="btn_gray">
          <Write />
          <span className="hidden">공지 등록</span>
        </Button>
      </Header>
      <section className="header_section" css={style}>
        <Typo type="pageNotice">수업 변동사항 등 공지를 알려주세요.</Typo>
        <BoardList content={noticeContent} />
      </section>
    </>
  )
}
const style = css``
export default NoticeList
