import { useEffect } from 'react'
import RouteIndex from '@router/index'
import Bar from '@layouts/Bar'
import { useLocation } from 'react-router-dom'
import Nav from '@layouts/Nav'
import ModalPortal from '@layouts/ModalPortal'
import { useDispatch } from 'react-redux'
import { popupControll } from '@/reducers/popup'

function App() {
  const { pathname } = useLocation()
  const dispatch = useDispatch()
  useEffect(() => {
    // 페이지 전환 시 항상 스크롤 값 0
    document.body.scrollTop = 0
    // 페이지 전환 시 햄버거 네비게이션 닫음
    dispatch(popupControll({ type: 'NAV_STATE', payload: false }))
  }, [dispatch, pathname])

  return (
    <>
      <RouteIndex />
      <>{pathname === '/members' ? <></> : <Bar />}</>
      <Nav />
      {/* 팝업영역 */}
      <ModalPortal></ModalPortal>
    </>
  )
}

export default App
