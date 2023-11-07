import { ChartIcon, InfoIcon, QnAIcon, TaskIcon, UserIcon } from 'components';
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { theme } from 'styles/theme';

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: ${theme.height.bottomNav};
  background: white;
  border-top: 0.5px solid ${theme.color.gray8};
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  height: 100%;
  padding: ${theme.spacing.md} 0;
  transition: all 0.2s;
  span {
    font-size: ${theme.typography.size.xxs};
    font-weight: ${theme.typography.weight.normal};
    color: inherit;
  }
  * {
    transition: all 0.2s;
  }
  &.active {
    color: ${theme.color.primary1};
    svg {
      fill: ${theme.color.primary1};
    }
  }
`;
export const BottomNav = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/task" className={isActive => (isActive ? 'active' : '')}>
        <TaskIcon />
        <span>과제</span>
      </StyledNavLink>
      <StyledNavLink to="/qna" className={isActive => (isActive ? 'active' : '')}>
        <QnAIcon />
        <span>질문</span>
      </StyledNavLink>
      <StyledNavLink to="/notice" className={isActive => (isActive ? 'active' : '')}>
        <InfoIcon />
        <span>공지</span>
      </StyledNavLink>
      <StyledNavLink to="/analysis" className={isActive => (isActive ? 'active' : '')}>
        <ChartIcon />
        <span>분석</span>
      </StyledNavLink>
      <StyledNavLink to="/info" className={isActive => (isActive ? 'active' : '')}>
        <UserIcon />
        <span>마이</span>
      </StyledNavLink>
    </StyledNav>
  );
};
