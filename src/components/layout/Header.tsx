import { ReactNode } from 'react';
import { ArrowIcon, IconButton, MenuIcon, Typography } from 'components';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { useNavigate } from 'react-router-dom';
import { popupControll } from 'reducers/popup';
import { useDispatch } from 'react-redux';

interface HeaderProps {
  leftNavType?: 'menu' | 'back';
  headerTitle: string;
  rightNavButtons?: ReactNode[] | [];
}

const StyledHeader = styled.header`
  position: sticky;
  left: 0;
  top: 0;
  z-index: ${theme.zIndex.lowest};
  flex-shrink: 0;
  width: 100%;
  height: ${theme.height.header};
  background: ${theme.color.white};
  border-bottom: 1px solid ${theme.color.gray9};
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: ${theme.bp.md};
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;
const StyledButtonWraper = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
`;

export const Header = ({ leftNavType = 'back', rightNavButtons = [], headerTitle }: HeaderProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onOpenSideNav = () => {
    dispatch(popupControll({ type: 'NAV_STATE', payload: true }));
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <StyledHeader>
        <div>
          {/* TODO */}
          {/* {leftNavType === 'menu' && (
            <IconButton
              icon={<MenuIcon />} //
              label="사이드메뉴열기"
              onClick={() => onOpenSideNav()}
            />
          )} */}
          {(leftNavType === 'back' || leftNavType === 'menu') && (
            <IconButton
              icon={<ArrowIcon direction="left" />} //
              label="뒤로가기"
              onClick={goBack}
            />
          )}
          <Typography typotype="sub3" as="h1" align="center">
            {headerTitle}
          </Typography>
          <StyledButtonWraper>{rightNavButtons?.map(Button => Button)}</StyledButtonWraper>
        </div>
      </StyledHeader>
    </>
  );
};
