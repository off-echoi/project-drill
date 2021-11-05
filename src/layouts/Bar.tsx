/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import COLORS from '@constants/colors'

function Bar() {
  return (
    <section css={style}>
      <ul className="bar_wrap">
        <li>
          <NavLink to="/task" activeClassName="on" className="nav">
            과제
          </NavLink>
        </li>
        <li>
          <NavLink to="/qna" activeClassName="on" className="nav">
            질문
          </NavLink>
        </li>
        <li>
          <NavLink to="/info" activeClassName="on" className="nav">
            정보
          </NavLink>
        </li>
        <li>
          <NavLink to="/notice" activeClassName="on" className="nav">
            공지
          </NavLink>
        </li>
        <li>
          <NavLink to="/analysis" activeClassName="on" className="nav">
            분석
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
  border-top: 1rem solid ${COLORS.DarkBlack};
  .bar_wrap {
    display: flex;
    width: 100%;
    justify-content: space-between;
    li {
      flex: 1;
      & + li {
        border-left: 1rem solid ${COLORS.DarkBlack};
      }
    }
  }
  .nav {
    width: 100%;
    height: 50rem;
    line-height: 50rem;
    text-align: center;
    font-size: 16rem;
    &.on {
      color: ${COLORS.PrimaryBlue};
    }
  }
`

export default memo(Bar)
