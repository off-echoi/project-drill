import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { popupControll } from 'reducers/popup';
import { Logo, Typography } from 'components';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { Link } from 'react-router-dom';

function MainPage() {
  // const dispatch = useDispatch();

  // const fnLoginPop = useCallback(() => {
  //   dispatch(popupControll({ type: 'POPUP_LOGIN_STATE', payload: true }));
  // }, [dispatch]);

  return (
    <StyledMain>
      <Logo $size="main" />
      <Typography typotype="body2" align="center">
        선생님과 학생 <br />
        1:1 관리 앱
      </Typography>
      <StyledLink to="/info">지금 바로 둘러보기 &rsaquo;</StyledLink>
      {/* <article className="pos_bottom">
        <button className="btn_login" onClick={fnLoginPop}>
          로그인
        </button>
        <button className="btn_join">회원가입</button>
      </article> */}
    </StyledMain>
  );
}
const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  position: relative;
  width: 100%;
  max-width: ${theme.bp.md};
  margin: 0 auto;
  padding-top: 20dvh;
  text-align: center;
  background: ${theme.color.white};
`;
const StyledLink = styled(Link)`
  margin-top: ${theme.spacing.lg};
  color: ${theme.color.primary1};
  font-size: ${theme.typography.size.md};
`;
export default MainPage;
