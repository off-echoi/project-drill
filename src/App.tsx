import { useEffect, useState } from 'react';
import RouteIndex from 'router';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { popupControll } from 'reducers/popup';
import ModalPortal from 'layouts/ModalPortal';
import Login from 'popups/Login';
import { RootState } from 'reducers/index';
import { authService } from 'fbase';
import { BottomNav, SideNav } from 'components';

function App() {
  const [isLogged, setIsLogged] = useState<boolean>(authService.currentUser !== null ? true : false);

  const { pathname } = useLocation();
  const { POPUP_LOGIN_STATE } = useSelector((state: RootState) => state.popup);
  const dispatch = useDispatch();
  useEffect(() => {
    // 페이지 전환 시 항상 스크롤 값 0
    document.body.scrollTop = 0;
    // 페이지 전환 시 햄버거 네비게이션 닫음
    dispatch(popupControll({ type: 'NAV_STATE', payload: false }));
  }, [dispatch, pathname]);

  return (
    <>
      <RouteIndex isLogged={isLogged} />
      <>{pathname === '/members' || pathname === '/' ? <></> : <BottomNav />}</>
      <SideNav />
      {/* 팝업영역 */}
      <ModalPortal>{POPUP_LOGIN_STATE ? <Login /> : null}</ModalPortal>
    </>
  );
}

export default App;
