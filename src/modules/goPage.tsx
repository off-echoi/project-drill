import { NavigateFunction } from 'react-router-dom'

// 페이지 이동 공통 함수
function goPage(url: string, navigate: NavigateFunction) {
  navigate(url)
}

export default goPage
