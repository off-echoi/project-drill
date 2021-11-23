import * as H from 'history'

// 페이지 이동 공통 함수
function goPage(url: string, history: H.History) {
  history.push(url)
}

export default goPage
