import { Header, Main, BoardTableV2, InputV2, TextArea, ButtonV2 } from 'components';
import { ChangeEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { formattingDate } from 'utils/dateUtils';

type NoticeType = {
  title: string;
  content: string;
};

function NoticeWritePage() {
  const navigate = useNavigate();

  const [notice, setNotice] = useState<NoticeType>({
    title: '',
    content: '',
  });

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const onChangNotice = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNotice(
      (prev): NoticeType => ({
        ...prev,
        [e.target.name]: e.target.value,
      })
    );
  };

  const onSubmitNotice = async () => {
    if (notice.title.trim() === '' || notice.content.trim() === '') {
      alert('과제를 입력해주세요.');
      return;
    }
    try {
      console.log(notice);
      // TODO loading...
      submitButtonRef.current && (submitButtonRef.current.disabled = true);
      alert('작성완료');
      navigate('/notice');
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
        headerTitle="공지사항 등록"
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
                    name="title"
                    id="title"
                    placeholder="공지 제목을 입력하세요."
                    value={notice.title}
                    onChange={onChangNotice}
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
                    placeholder="공지 내용을 입력하세요."
                    value={notice.content}
                    onChange={onChangNotice}
                  />
                ),
              },
            ]}
          />
          <ButtonV2 onClick={onSubmitNotice} ref={submitButtonRef}>
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
export default NoticeWritePage;
