/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from 'constants/colors'
import { memo, ReactElement, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typo } from 'components/index'
import { useDispatch } from 'react-redux'
import { popupControll } from 'reducers/popup'
import { ReactComponent as Menu } from 'assets/icon_menu.svg'
import { ReactComponent as Back } from 'assets/icon_back.svg'

type HeaderType = {
  type?: 'menu' | 'back'
  pageName: string
  children?: ReactElement<HTMLButtonElement> | ReactElement<HTMLButtonElement>[]
}

function Header({ type = 'menu', pageName, children }: HeaderType) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // 사이드 네비 함수
  const fnNav = useCallback(() => {
    dispatch(popupControll({ type: 'NAV_STATE', payload: true }))
  }, [dispatch])

  // 뒤로가기
  const fnGoBack = useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <header css={style}>
      {type === 'menu' && (
        <Button onClick={fnNav} type="icon" addClassName="btn_left">
          <Menu />
          <span className="hidden">메뉴</span>
        </Button>
      )}
      {type === 'back' && (
        <Button onClick={fnGoBack} type="icon" addClassName="btn_left">
          <Back />
          <span className="hidden">뒤로가기</span>
        </Button>
      )}
      <Typo type="title" addClassName="page_title">
        {pageName}
      </Typo>
      {children && <div className="right_btn_wrap">{children}</div>}
    </header>
  )
}
const style = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 45rem;
  border-bottom: 1rem solid ${COLORS.LightGray};
  background: #fff;
  .btn_left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
  }
  .page_title {
    font-size: 18rem;
    line-height: 45rem;
  }
  .right_btn_wrap {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    margin: auto;
    displat: flex;
    justify-content: space-between;
    button + button,
    a + a {
      margin-left: 10rem;
    }
  }
`
export default memo(Header)
