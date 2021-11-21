// 공통
import Common from './00_Common/Common'
// 메인화면
import Main from './00_Main/Main'
// 회원 선택 화면
import Members from './00_Members/Members'
// 회원 삭제
import MemberDelete from './00_Members/MemberDelete'
// 회원 정보
import Info from './01_Info/Info'
// 과제 리스트 / 상세 / 쓰기
import TaskList from './02_Task/TaskList'
import TaskDetail from './02_Task/TaskDetail'
import TaskWrite from './02_Task/TaskWrite'
// 질문
import QuestionList from './03_Question/QuestionList'
import QuestionDetail from './03_Question/QuestionDetail'
// 공지사항 리스트 / 상세 / 쓰기
import NoticeList from './04_Notice/NoticeList'
import NoticeWrite from './04_Notice/NoticeWrite'
import NoticeDetail from './04_Notice/NoticeDetail'
// 분석
import Analysis from './05_Analysis/Analysis'
import AnalysisWrite from './05_Analysis/AnalysisWrite'
// 서비스 탈퇴
import Withdraw from './08_Withdraw/Withdraw'
// 카운터 테스트
import Counter from './CounterTest/Counter'

interface IRoutes {
  title: string
  path: string
  exact?: boolean
  component: React.FC
}

const Routes: IRoutes[] = [
  {
    title: '공통',
    path: '/common',
    component: Common,
    exact: true,
  },
  {
    title: '메인',
    path: '/',
    component: Main,
    exact: true,
  },
  {
    title: '관리 회원 선택',
    path: '/members',
    component: Members,
    exact: true,
  },
  {
    title: '관리 회원 삭제',
    path: '/memberDelete',
    component: MemberDelete,
    exact: true,
  },
  {
    title: '회원 정보',
    path: '/info',
    component: Info,
    exact: true,
  },
  {
    title: '과제',
    path: '/task',
    component: TaskList,
    exact: true,
  },
  {
    title: '과제 상세 - 읽기',
    path: '/task/detail',
    component: TaskDetail,
    exact: true,
  },
  {
    title: '과제 작성',
    path: '/task/write',
    component: TaskWrite,
    exact: true,
  },
  {
    title: '질문답',
    path: '/qna',
    component: QuestionList,
    exact: true,
  },
  {
    title: '질문답 상세 - 읽기',
    path: '/qna/detail',
    component: QuestionDetail,
    exact: true,
  },
  {
    title: '공지',
    path: '/notice',
    component: NoticeList,
    exact: true,
  },
  {
    title: '공지 작성',
    path: '/notice/write',
    component: NoticeWrite,
    exact: true,
  },
  {
    title: '공지 상세 - 읽기',
    path: '/notice/detail',
    component: NoticeDetail,
    exact: true,
  },
  {
    title: '분석',
    path: '/analysis',
    component: Analysis,
    exact: true,
  },
  {
    title: '분석 작성',
    path: '/analysis/write',
    component: AnalysisWrite,
    exact: true,
  },
  {
    title: '서비스 탈퇴',
    path: '/withdraw',
    component: Withdraw,
    exact: true,
  },
  {
    title: '카운터 테스트',
    path: '/counter',
    component: Counter,
    exact: true,
  },
]

export default Routes
