// 회원, 클래스 선택 화면
import Members from './00_Members/Members'

interface IRoutes {
  title: string
  path: string
  exact?: boolean
  component: React.ReactNode
}

const Routes: IRoutes[] = [
  {
    title: '관리 회원 선택',
    path: '/members',
    component: Members,
    exact: true,
  },
]

export default Routes
