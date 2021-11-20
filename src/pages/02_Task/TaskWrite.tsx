/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@/constants/colors'
import { Button, Input } from '@components/index'
import { memo, useCallback, useState } from 'react'
import Header from '@layouts/Header'

type TaskType = {
  subject: string
  content: string
}
function TaskWrite() {
  const [task, setTask] = useState<TaskType>({
    subject: '',
    content: '',
  })

  const _setTask = useCallback((e) => {
    setTask(
      (prev): TaskType => ({
        ...prev,
        [e.target.name]: e.target.value,
      })
    )
  }, [])
  const submitTask = useCallback(() => {
    console.log(task)
    alert('작성완료!')
  }, [task])

  return (
    <>
      <Header pageName="과제 등록" type="back" />
      <section className="header_section fixed_btn_section" css={style}>
        <div>
          <Input labelText="제목" id="subject" type="text" name="subject" value={task.subject} onChange={_setTask} addClassName="task_input" />
          <Input labelText="작성일" id="date" type="text" name="date" value="2021.11.03" addClassName="task_input" readOnly />
          <Input labelText="작성자" id="user" type="text" name="user" value="최선생" addClassName="task_input" readOnly />
        </div>
        <article>
          <textarea
            name="content"
            id="content"
            placeholder="과제를 입력하세요."
            value={task.content}
            onChange={_setTask}
            className="task_content"></textarea>
        </article>
        <Button type="fullFix" onClick={submitTask} disabled={task.subject === '' || task.content === ''}>
          등록하기
        </Button>
      </section>
    </>
  )
}

const style = css`
  padding-left: 10rem;
  padding-right: 10rem;
  .task_input {
    padding: 10rem 0;
    border-bottom: 1rem solid ${COLORS.LightGray};
  }
  .task_content {
    font-size: 15rem;
    width: 100%;
    height: calc(100vh - 250rem);
  }
`
export default memo(TaskWrite)
