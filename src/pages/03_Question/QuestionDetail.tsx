/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { BoardTable, Button } from '@components/index'
import { Fragment, useCallback, useState } from 'react'
import Header from '@layouts/Header'

function QuestionDetail() {
  const answerYN: boolean = false
  const [answer, setAnswer] = useState<string>('')

  const _setAnswer = useCallback((e) => {
    setAnswer(e.target.value)
  }, [])

  const submitAnswer = useCallback(() => {
    console.log(answer)
    alert('답변을 등록했습니다.')
  }, [answer])

  const updateAnswer = useCallback(() => {
    console.log('TODO: 준비중입니다.')
  }, [])
  return (
    <>
      <Header pageName="질문 & 답변" type="back" />
      <section className="header_section fixed_btn_section" css={style}>
        <BoardTable>
          <tbody>
            <tr>
              <th>제목</th>
              <td>do와 관련하여 질문있습니다.</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>김회원</td>
            </tr>
            <tr>
              <th>날짜</th>
              <td>2011-11-01</td>
            </tr>
            <tr>
              <th>내용</th>
              <td>
                쌤~ <br />
                감이온다 영어 교재 55p에서 질문이 있습니다. <br />
                Why are you so tanned? 라는 문장을 봤는데요, <br />
                tan은 동사인데 왜 Why do you so tanned?라고 하지 않나요? <br /> <br />
                be동사는 형용사와, do동사는 동사와 쓴다고 했는데 혼란스러워요...
              </td>
            </tr>
            <tr className="board_answer">
              <th> 답변</th>
              <td>
                {!answerYN && <textarea name="" id="" placeholder="답변을 작성해주세요." value={answer} onChange={_setAnswer}></textarea>}
                {answerYN &&
                  answer &&
                  answer.split('\n').map((line, i) => {
                    return (
                      <Fragment key={i}>
                        {line}
                        <br />
                      </Fragment>
                    )
                  })}
              </td>
            </tr>
          </tbody>
        </BoardTable>
        {!answerYN && (
          <Button type="fullFix" onClick={submitAnswer} disabled={answer === ''}>
            답변등록
          </Button>
        )}
        {answerYN && (
          <Button type="fullFix" onClick={updateAnswer}>
            답변 수정
          </Button>
        )}
      </section>
    </>
  )
}
const style = css`
  .board_answer {
    th {
      vertical-align: top;
    }
    td {
    }
    textarea {
      width: 100%;
      height: 100rem;
      font-size: 15rem;
    }
  }
`
export default QuestionDetail
