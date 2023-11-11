// 공통
import Common from './00_Common/Common';
// 메인화면
import Main from './00_Main/Main';
// 회원 선택 화면
import Members from './00_Members/Members';
// 회원 삭제
import MemberDelete from './00_Members/MemberDelete';
// 회원 정보
import Info from './01_Info/Info';
// 과제 리스트 / 상세 / 쓰기
import TaskList from './Task/TaskList';
import TaskDetail from './Task/TaskDetail';
import TaskWrite from './Task/TaskWrite';
// 질문
import QuestionList from './03_Question/QuestionList';
import QuestionDetail from './03_Question/QuestionDetail';
// 공지사항 리스트 / 상세 / 쓰기
import NoticeList from './04_Notice/NoticeList';
import NoticeWrite from './04_Notice/NoticeWrite';
import NoticeDetail from './04_Notice/NoticeDetail';
// 분석
import Analysis from './05_Analysis/Analysis';
import AnalysisWrite from './05_Analysis/AnalysisWrite';
// 서비스 탈퇴
import Withdraw from './08_Withdraw/Withdraw';
// 카운터 테스트
import Counter from './CounterTest/Counter';

interface IRoutes {
  title: string;
  path: string;
  exact?: boolean;
  Component: React.FC;
}

const RoutesPath: IRoutes[] = [
  {
    title: '공통',
    path: '/common',
    Component: Common,
    exact: true,
  },
  {
    title: '메인',
    path: '/',
    Component: Main,
    exact: true,
  },
  {
    title: '관리 회원 선택',
    path: '/members',
    Component: Members,
    exact: true,
  },
  {
    title: '관리 회원 삭제',
    path: '/memberDelete',
    Component: MemberDelete,
    exact: true,
  },
  {
    title: '회원 정보',
    path: '/info',
    Component: Info,
    exact: true,
  },
  {
    title: '과제',
    path: '/task',
    Component: TaskList,
    exact: true,
  },
  {
    title: '과제 상세 - 읽기',
    path: '/task/:taskId',
    Component: TaskDetail,
    exact: true,
  },
  {
    title: '과제 작성',
    path: '/task/write',
    Component: TaskWrite,
    exact: true,
  },
  {
    title: '질문답',
    path: '/qna',
    Component: QuestionList,
    exact: true,
  },
  {
    title: '질문답 상세 - 읽기',
    path: '/qna/detail',
    Component: QuestionDetail,
    exact: true,
  },
  {
    title: '공지',
    path: '/notice',
    Component: NoticeList,
    exact: true,
  },
  {
    title: '공지 작성',
    path: '/notice/write',
    Component: NoticeWrite,
    exact: true,
  },
  {
    title: '공지 상세 - 읽기',
    path: '/notice/detail',
    Component: NoticeDetail,
    exact: true,
  },
  {
    title: '분석',
    path: '/analysis',
    Component: Analysis,
    exact: true,
  },
  {
    title: '분석 작성',
    path: '/analysis/write',
    Component: AnalysisWrite,
    exact: true,
  },
  {
    title: '서비스 탈퇴',
    path: '/withdraw',
    Component: Withdraw,
    exact: true,
  },
  {
    title: '카운터 테스트',
    path: '/counter',
    Component: Counter,
    exact: true,
  },
];

export default RoutesPath;
