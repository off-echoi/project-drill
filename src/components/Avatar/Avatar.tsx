/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { memo, ReactElement } from 'react'

type AvatarType = {
  children?: ReactElement<HTMLImageElement>
  name: string
  date?: string // 클래스 날짜
}

function Avatar({ children, name, date }: AvatarType) {
  return (
    <div css={style}>
      {children}
      <span>{name}</span>
      {date && <span>{date}</span>}
    </div>
  )
}
const style = css({})
export default memo(Avatar)
