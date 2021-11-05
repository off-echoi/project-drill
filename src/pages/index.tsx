// 공통
import Common from './00_Common/Common'
// 회원, 클래스 선택 화면
import Members from './00_Members/Members'
// 회원 정보
import Info from './01_Info/Info'
// 과제
import TaskList from './02_Task/TaskList'
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
    title: '회원 정보',
    path: '/info',
    component: Info,
    exact: true,
  },
  {
    title: '과제',
    path: '/TaskList',
    component: TaskList,
    exact: true,
  },
  {
    title: '카운터 테스트',
    path: '/Counter',
    component: Counter,
    exact: true,
  },
]

export default Routes
