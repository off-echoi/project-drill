/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { ReactComponent as App } from '@assets/icon_app.svg'
import { Button } from '@/components'

function Main() {
  return (
    <section css={style}>
      <App />
      <Button>로그인</Button>
      <Button>회원가입</Button>
    </section>
  )
}
const style = css``
export default Main
