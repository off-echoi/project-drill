/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardTable, Button } from '@components/index'
import { useCallback } from 'react'
import Header from '@layouts/Header'
import { ReactComponent as Delete } from '@assets/icon_delete.svg'

function NoticeDetail() {
  const fnDelete = useCallback(() => {
    alert('글이 삭제되었습니다.')
  }, [])
  return (
    <>
      <Header pageName="공지사항" type="back">
        <Button type="icon" onClick={fnDelete} addClassName="btn_gray">
          <Delete />
          <span className="hidden">글 삭제</span>
        </Button>
      </Header>
      <section className="header_section" css={style}>
        <BoardTable>
          <tbody>
            <tr>
              <th>제목</th>
              <td>10월 20일 수업은 11월 1일에 보강하겠습니다.</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>최선생</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>2011-11-01</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                10월 20일에 30분 일찍 마친 수업의 보강은 11월 1일에 3시에 하겠습니다.
                <br />
                과제는 이번수업에서는 확인하지 않고 11월 4일에 확인하겠습니다.
                <br />
                <br />
                그럼 한주 잘 보내세요~^^.
              </td>
            </tr>
          </tbody>
        </BoardTable>
      </section>
    </>
  )
}
const style = css``
export default NoticeDetail
