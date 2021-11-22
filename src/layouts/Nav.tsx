/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo, useCallback } from 'react'
import { Avatar, Button } from '@components/index'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { popupControll } from '@/reducers/popup'
import { RootState } from '@reducers/index'
import MyProfile from '@assets/profile02.jpg'
import { ReactComponent as Close } from '@assets/icon_close.svg'

function Nav() {
  const { NAV_STATE } = useSelector((state: RootState) => state.popup)

  const dispatch = useDispatch()
  const fnCloseNav = useCallback(() => {
    dispatch(popupControll({ type: 'NAV_STATE', payload: false }))
  }, [dispatch])

  return (
    <>
      <nav css={style} className={NAV_STATE ? 'on' : ''}>
        <Button type="icon" addClassName="btn_close" onClick={fnCloseNav}>
          <Close />
          <span className="hidden">네비게이션 닫기</span>
        </Button>
        <section className="info_section">
          <Avatar name="최선생" type="list">
            <img src={MyProfile} alt="내 사진" />
          </Avatar>
        </section>
        <ul>
          {/* <li className="link_list">
            <NavLink to="/" activeClassName="on">
              내 정보 수정
            </NavLink>
          </li> */}
          <li className="link_list">
            <NavLink to="/members" activeClassName="on">
              다른 회원 선택
            </NavLink>
          </li>
          <li className="link_list">
            <NavLink to="/memberDelete" activeClassName="on">
              회원삭제
            </NavLink>
          </li>
          <li className="link_list">
            <button onClick={() => alert('로그아웃 되었습니다.')}>로그아웃</button>
          </li>
          <li className="link_list">
            <NavLink to="/withdraw" activeClassName="on">
              서비스 탈퇴
            </NavLink>
          </li>
        </ul>
      </nav>
      {NAV_STATE && <div className="dim" css={dimStyle}></div>}
    </>
  )
}

const style = css`
  overflow-y: auto;
  position: fixed;
  left: -350rem;
  top: 0;
  z-index: 30;
  width: 250rem;
  height: 100vh;
  min-height: 100rem;
  padding: 0 20rem;
  background: white;
  box-shadow: 0px 0 20px rgba(0, 0, 0, 0.3);
  transition: all 0.2s;
  &.on {
    left: 0;
  }
  .btn_close {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 30;
    svg {
      fill: ${COLORS.PrimaryBlue};
    }
  }
  .info_section {
    border-bottom: 1px solid ${COLORS.LightGray};
    padding: 20rem 0;
  }
  .link_list {
    font-size: 14rem;
    padding: 15rem 0;
    a,
    button {
      font-size: inherit;
      color: ${COLORS.DarkBlack};
      &.on {
        color: ${COLORS.PrimaryBlue};
      }
    }
  }
`
const dimStyle = css`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  background: rgba(0, 0, 0, 0.5);
`
export default memo(Nav)
