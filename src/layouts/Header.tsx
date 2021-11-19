/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo, ReactElement } from 'react'
import { Typo } from '@components/index'
import { ReactComponent as Menu } from '@assets/icon_menu.svg'

type HeaderType = {
  pageName: string
  children?: ReactElement<HTMLButtonElement> | ReactElement<HTMLButtonElement>[]
}

function Header({ pageName, children }: HeaderType) {
  return (
    <header css={style}>
      <button className="btn_menu">
        <Menu />
        <span className="hidden">메뉴</span>
      </button>
      <Typo type="title" addClassName="pageTitle">
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
  .btn_menu {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    width: 44rem;
    margin: auto;
    svg {
      width: 25rem;
      height: 25rem;
      fill: ${COLORS.PrimaryBlue};
    }
  }
  .pageTitle {
    font-size: 18rem;
    line-height: 45rem;
  }
  .right_btn_wrap {
    position: absolute;
    right: 10rem;
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
