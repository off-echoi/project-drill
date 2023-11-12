import { Header, CTABox, IconButton, PencilIcon, Main, ListTable } from 'components';
import { useNavigate } from 'react-router-dom';
import { goPage } from 'modules';

// mockup Data
const taskData = [
  {
    title: '10월 4주차 과제입니다.',
    date: '2023-10-18',
    linkTo: '/task/1',
    idx: 1,
  },
  {
    title: '10월 3주차 과제입니다.',
    date: '2023-10-09',
    linkTo: '/task/2',
    idx: 2,
  },
  {
    title: '10월 2주차 과제입니다.',
    date: '2023-10-01',
    linkTo: '/task/3',
    idx: 3,
  },
];

function TaskListPage() {
  const navigate = useNavigate();

  return (
    <>
      <Header //
        leftNavType="menu"
        headerTitle="과제"
        rightNavButtons={[<IconButton icon={<PencilIcon />} label="과제 등록" key={'addTask'} onClick={() => goPage('/task/write', navigate)} />]}
      />
      <Main>
        <CTABox content="수업과제를 등록하는 공간입니다." />

        <ListTable
          tableData={taskData}
          columnTitle={[
            { column: '제목', size: 'auto' },
            { column: '날짜', size: '120px' },
          ]}
        />
      </Main>
    </>
  );
}

export default TaskListPage;
