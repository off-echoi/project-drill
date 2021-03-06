/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo } from 'react'

type buttonType = {
  type: 'full' | 'icon' | 'fullFix'
  addClassName?: string
  disabled?: boolean
  children: JSX.Element | JSX.Element[] | string
  onClick: () => void
}

function Button({ type, addClassName, disabled, onClick, children }: buttonType) {
  return (
    <>
      {type === 'full' && (
        <button onClick={onClick} className={addClassName} disabled={disabled} css={fullStyle}>
          {children}
        </button>
      )}
      {type === 'fullFix' && (
        <button onClick={onClick} className={addClassName} disabled={disabled} css={fullFixStyle}>
          {children}
        </button>
      )}
      {type === 'icon' && (
        <button onClick={onClick} className={addClassName} css={iconStyle}>
          {children}
        </button>
      )}
    </>
  )
}

const fullStyle = css`
  width: 100%;
  height: 50rem;
  background: ${COLORS.PrimaryBlue};
  font-size: 16rem;
  color: #fff;
  &:disabled {
    background: ${COLORS.SecondGray};
  }
`
const fullFixStyle = css`
  position: fixed;
  z-index: 20;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50rem;
  background: ${COLORS.PrimaryBlue};
  font-size: 16rem;
  color: #fff;
  &:disabled {
    background: ${COLORS.SecondGray};
  }
`
const iconStyle = css`
  width: 44rem;
  height: 44rem;
  svg {
    width: 25rem;
    height: 25rem;
    fill: ${COLORS.PrimaryBlue};
  }
  &.btn_gray svg {
    width: 20rem;
    height: 20rem;
    fill: ${COLORS.SecondGray};
  }
`
export default memo(Button)
