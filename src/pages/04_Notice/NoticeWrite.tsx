/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@/constants/colors'
import { Button, Input } from '@components/index'
import { useCallback, useState } from 'react'
import Header from '@layouts/Header'

type NoticeType = {
  subject: string
  content: string
}
function NoticeWrite() {
  const [notice, setNotice] = useState<NoticeType>({
    subject: '',
    content: '',
  })

  const _setNotice = useCallback((e) => {
    setNotice(
      (prev): NoticeType => ({
        ...prev,
        [e.target.name]: e.target.value,
      })
    )
  }, [])
  const submitNotice = useCallback(() => {
    console.log(notice)
    alert('작성완료!')
  }, [notice])

  return (
    <>
      <Header pageName="공지사항 등록" type="back" />
      <section className="header_section fixed_btn_section" css={style}>
        <div>
          <Input labelText="제목" id="subject" type="text" name="subject" value={notice.subject} onChange={_setNotice} addClassName="notice_input" />
          <Input labelText="작성일" id="date" type="text" name="date" value="2021.11.03" addClassName="notice_input" readOnly />
          <Input labelText="작성자" id="user" type="text" name="user" value="최선생" addClassName="notice_input" readOnly />
        </div>
        <article>
          <textarea
            name="content"
            id="content"
            placeholder="공지내용을 입력하세요."
            value={notice.content}
            onChange={_setNotice}
            className="notice_content"></textarea>
        </article>
        <Button type="fullFix" onClick={submitNotice} disabled={notice.subject === '' || notice.content === ''}>
          등록하기
        </Button>
      </section>
    </>
  )
}

const style = css`
  padding-left: 10rem;
  padding-right: 10rem;
  .notice_input {
    padding: 10rem 0;
    border-bottom: 1rem solid ${COLORS.LightGray};
  }
  .notice_content {
    font-size: 15rem;
    width: 100%;
    height: calc(100vh - 250rem);
  }
`
export default NoticeWrite
