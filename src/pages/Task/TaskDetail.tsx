import { BoardTableV2, Main, Header, IconButton, DeleteIcon } from 'components';

// mockup 용
const tableData = [
  { title: '제목', content: '10월 4주차 과제입니다.' },
  {
    title: '작성자',
    content: '최선생',
  },
  { title: '날짜', content: '2023-10-18' },
  {
    title: '내용',
    content:
      '교재 : 감이온다 영어 \n48페이지부터 60페이지 까지 \n\n내신 : 영어 교과서 \n3단원 짧은 지문 외워오기 \n\n이상입니다. \n과제하다가 질문 생기면 질문 방에 언제든지 글 작성해주세요 ~^^.',
  },
];
function TaskDetailPage() {
  const onDeleteTask = () => {
    alert('글이 삭제되었습니다.');
  };
  return (
    <>
      <Header //
        leftNavType="back"
        headerTitle="과제"
        rightNavButtons={[<IconButton icon={<DeleteIcon />} label="과제 삭제" key={'taskDelete'} onClick={onDeleteTask} />]}
      />
      <Main>
        <BoardTableV2 tableData={tableData} />
      </Main>
    </>
  );
}

export default TaskDetailPage;
