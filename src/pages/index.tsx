// 공통
import Common from './00_Common/Common'
import MemberDelete from './00_Members/MemberDelete'
// 회원, 클래스 선택 화면
import Members from './00_Members/Members'
// 회원 정보
import Info from './01_Info/Info'
// 과제
import TaskList from './02_Task/TaskList'
// 질문
import QuestionList from './03_Question/QuestionList'
// 공지사항
import NoticeList from './04_Notice/NoticeList'
// 회원 탈퇴
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
    title: '질문답',
    path: '/qna',
    component: QuestionList,
    exact: true,
  },
  {
    title: '공지',
    path: '/notice',
    component: NoticeList,
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
