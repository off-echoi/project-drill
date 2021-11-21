/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { memo } from 'react'
import { Button } from '@/components'
import { ReactComponent as Close } from '@assets/icon_close.svg'

type ModalWrapType = {
  onClose: () => void
  children?: JSX.Element | JSX.Element[]
}
function ModalWrap({ onClose, children }: ModalWrapType) {
  return (
    <div css={style}>
      <section className="pop_header">
        <Button type="icon" onClick={onClose} addClassName="popup_close">
          <Close />
          <span className="hidden">팝업닫기</span>
        </Button>
      </section>
      {children}
    </div>
  )
}
const style = css`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100vh;
  background: #fff;
  .pop_header {
    height: 50rem;
  }
  .popup_close {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`
export default memo(ModalWrap)
