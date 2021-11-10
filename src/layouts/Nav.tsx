/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo } from 'react'
import { Avatar } from '@/components'
import { NavLink } from 'react-router-dom'
import MyProfile from '@assets/profile02.jpg'

function Nav() {
  return (
    <nav css={style}>
      <section className="info_section">
        <Avatar name="가가" type="list">
          <img src={MyProfile} alt="내 사진" />
        </Avatar>
      </section>
      <ul>
        <li className="link_list">
          <NavLink to="/" activeClassName="on">
            내 정보 수정
          </NavLink>
        </li>
        <li className="link_list">
          <NavLink to="/members" activeClassName="on">
            다른 회원 선택
          </NavLink>
        </li>
        <li className="link_list">
          <NavLink to="/" activeClassName="on">
            회원삭제
          </NavLink>
        </li>
        <li className="link_list">
          <NavLink to="/" activeClassName="on">
            로그아웃
          </NavLink>
        </li>
        <li className="link_list">
          <NavLink to="/" activeClassName="on">
            서비스 탈퇴
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

const style = css`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  width: 250rem;
  height: 100vh;
  padding: 0 20rem;
  background: white;
  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.3);
  .info_section {
    border-bottom: 1px solid ${COLORS.LightGray};
    padding: 20rem 0;
  }
  .link_list {
    font-size: 14rem;
    padding: 15rem 0;
    a {
      color: ${COLORS.DarkBlack};
      &.on {
        color: ${COLORS.PrimaryBlue};
      }
    }
  }
`
export default memo(Nav)
