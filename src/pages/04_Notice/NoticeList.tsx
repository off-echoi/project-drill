/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardList, Button, Typo } from '@components/index'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goPage } from '@/modules'
import { dbService } from '@/fbase'
import { collection, getDocs, query } from 'firebase/firestore'
import Header from '@layouts/Header'
import { ReactComponent as Write } from '@assets/icon_write.svg'
import moment from 'moment'

type ContentType = {
  subject: string
  createdAt: string
  id: string | number
  path: string
  userName: string
}

function NoticeList() {
  const [loading, setLoading] = useState<boolean>(true)
  const [noticeList, setNoticeList] = useState<ContentType[]>([])
  const navigate = useNavigate()

  // 리스트 불러오기
  const getNoticeList = useCallback(async () => {
    const q = query(collection(dbService, 'notice'))
    const querySnapshot = await getDocs(q)
    let noticeList: ContentType[] = []
    querySnapshot.forEach(doc => {
      const _notice: ContentType = {
        // ...doc.data(),
        id: doc.id,
        subject: doc.data().subject,
        userName: doc.data().userName,
        path: '/notice/detail',
        createdAt: moment(doc.data().createdAt.toDate()).format('YYYY.MM.DD'),
      }
      noticeList.push(_notice)
    })
    setNoticeList(noticeList.reverse())
    setLoading(false)
  }, [])

  useEffect(() => {
    getNoticeList()
  }, [getNoticeList])

  const goToPage = useCallback(
    url => {
      goPage(url, navigate)
    },
    [navigate]
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
        <BoardList content={noticeList} loading={loading} />
      </section>
    </>
  )
}
const style = css``
export default NoticeList
