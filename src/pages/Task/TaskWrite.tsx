import { Header, Main, BoardTableV2, InputV2, TextArea, ButtonV2 } from 'components';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { formattingDate } from 'utils/dateUtils';

type TaskType = {
  subject: string;
  content: string;
};
function TaskWrite() {
  const navigate = useNavigate();
  const [task, setTask] = useState<TaskType>({
    subject: '',
    content: '',
  });

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const onChangeTask = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTask(
      (prev): TaskType => ({
        ...prev,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onSubmitTask = async () => {
    if (task.subject.trim() === '' || task.content.trim() === '') {
      alert('과제를 입력해주세요.');
      return;
    }
    try {
      console.log(task);
      // TODO loading...
      submitButtonRef.current && (submitButtonRef.current.disabled = true);
      alert('작성완료');
      navigate('/task');
    } catch (error) {
      alert('작성에 실패했습니다.');
    } finally {
      submitButtonRef.current && (submitButtonRef.current.disabled = false);
    }
  };

  return (
    <>
      <Header //
        leftNavType="back"
        headerTitle="과제 등록"
      />
      <Main>
        <StyledDiv>
          <BoardTableV2
            tableData={[
              {
                title: '제목',
                content: (
                  <InputV2
                    type="text" //
                    name="subject"
                    id="subject"
                    placeholder="과제 제목을 입력하세요."
                    value={task.subject}
                    onChange={onChangeTask}
                  />
                ),
              },
              {
                title: '작성자',
                content: '최선생',
              },
              {
                title: '작성일',
                content: formattingDate(),
              },
              {
                title: '내용',
                content: (
                  <TextArea
                    height={'250px'} //
                    name="content"
                    id="content"
                    placeholder="과제 내용을 입력하세요."
                    value={task.content}
                    onChange={onChangeTask}
                  />
                ),
              },
            ]}
          />
          <ButtonV2 onClick={onSubmitTask} ref={submitButtonRef}>
            등록하기
          </ButtonV2>
        </StyledDiv>
      </Main>
    </>
  );
}
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`;
export default TaskWrite;
