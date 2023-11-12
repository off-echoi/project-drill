import { Avatar, CloseIcon, IconButton } from '..';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { useDispatch, useSelector } from 'react-redux';
import { popupControll } from 'reducers/popup';
import { RootState } from 'reducers/index';

const StyledSideNav = styled.nav`
  position: fixed;
  left: -350px;
  top: 0;
  z-index: ${theme.zIndex.high};
  display: grid;
  gap: 20px;
  grid-template-rows: 100px auto 40px;
  width: 350px;
  height: 100dvh;
  padding: ${theme.spacing.xxl};
  background: ${theme.color.white};
  transition: all 0.25s;
  &.open {
    left: 0;
  }
  > .btn_close {
    position: absolute;
    right: ${theme.spacing.xxl};
    top: ${theme.spacing.xxl};
  }
`;
const StyledLinkListSection = styled.section`
  display: grid;
`;
const StyledDim = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${theme.zIndex.base};
  width: 100%;
  height: 100%;
  background: ${theme.color.gray1}50;
`;

export const SideNav = () => {
  const { NAV_STATE } = useSelector((state: RootState) => state.popup);

  const dispatch = useDispatch();
  const onCloseSideNav = () => {
    dispatch(popupControll({ type: 'NAV_STATE', payload: false }));
  };

  return (
    <>
      <StyledSideNav className={NAV_STATE ? 'open' : ''}>
        <IconButton label="네비게이션 닫기" icon={<CloseIcon />} onClick={onCloseSideNav} className="btn_close" />
        <Avatar name="최선생" direction="row" />
        <StyledLinkListSection>
          <NavLink to="/members" className={isActive => (isActive ? 'on' : '')}>
            다른 회원 선택
          </NavLink>
          <NavLink to="/memberDelete" className={isActive => (isActive ? 'on' : '')}>
            회원삭제
          </NavLink>
          <button onClick={() => alert('로그아웃 되었습니다.')}>로그아웃</button>
        </StyledLinkListSection>
        <aside>
          <NavLink to="/withdraw" className={isActive => (isActive ? 'on' : '')}>
            서비스 탈퇴
          </NavLink>
        </aside>
      </StyledSideNav>
      {NAV_STATE && <StyledDim onClick={onCloseSideNav} />}
    </>
  );
};
