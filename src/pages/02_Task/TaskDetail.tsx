/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardTable, Button } from '@components/index'
import { useCallback } from 'react'
import Header from '@layouts/Header'
import { ReactComponent as Delete } from '@assets/icon_delete.svg'

function TaskDetail() {
  const fnDelete = useCallback(() => {
    alert('글이 삭제되었습니다.')
  }, [])
  return (
    <>
      <Header pageName="과제" type="back">
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
              <td>10월 4주차 과제입니다.</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>최선생</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>2011-10-18</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                교재 : 감이온다 영어 <br />
                48페이지부터 60페이지 까지 <br />
                <br />
                내신 : 영어 교과서 <br />
                3단원 짧은 지문 외워오기 <br />
                <br />
                이상입니다. <br />
                과제하다가 질문 생기면 질문 방에 언제든지 글 작성해주세요 ~^^.
              </td>
            </tr>
          </tbody>
        </BoardTable>
      </section>
    </>
  )
}
const style = css``
export default TaskDetail
