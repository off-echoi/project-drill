// 회원, 클래스 선택 화면
import Members from '@/pages/00_Members/Members'
// 회원 정보
import Info from '@/pages/01_Info/Info'

interface IRoutes {
  title: string
  path: string
  exact?: boolean
  component: React.FC
}

const Routes: IRoutes[] = [
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
]

export default Routes
