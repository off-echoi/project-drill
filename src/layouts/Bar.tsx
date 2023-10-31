/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Task } from '@assets/barIcons/icon_task.svg'
import { ReactComponent as Qna } from '@assets/barIcons/icon_qna.svg'
import { ReactComponent as Info } from '@assets/barIcons/icon_info.svg'
import { ReactComponent as Notice } from '@assets/barIcons/icon_notice.svg'
import { ReactComponent as Analysis } from '@assets/barIcons/icon_analysis.svg'

function Bar() {
  return (
    <section css={style}>
      <ul className="bar_wrap">
        <li>
          <NavLink to="/task" className={isActive => (isActive ? 'nav nav_task on' : 'nav nav_task}')}>
            <Task />
            <span>과제</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/qna" className={isActive => (isActive ? 'nav nav_qna on' : 'nav nav_qna')}>
            <Qna />
            <span>질문</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" className={isActive => (isActive ? 'nav nav_info on' : 'nav nav_info}')}>
            <Info />
            <span>정보</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/notice" className={isActive => (isActive ? 'nav nav_noti}c on' : 'nav nav_notice')}>
            <Notice />
            <span>공지</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/analysis" className={isActive => (isActive ? 'nav nav_ana on' : 'nav nav_ana')}>
            <Analysis />
            <span>분석</span>
          </NavLink>
        </li>
      </ul>
    </section>
  )
}

const style = css`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background: white;
  border-top: 1rem solid ${COLORS.LightGray};
  .bar_wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      flex: 1;
    }
  }
  .nav {
    width: 100%;
    height: 50rem;
    padding: 5rem 0;
    text-align: center;
    font-size: 12rem;
    &.on {
      color: ${COLORS.PrimaryBlue};
    }
  }
  svg {
    display: block;
    width: auto;
    height: 20rem;
    margin: 0 auto 8rem;
  }
  .on svg {
    fill: ${COLORS.PrimaryBlue};
  }
`

export default memo(Bar)
