/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo } from 'react'

type TypoType = {
  type: 'title' | 'subTitle' | 'text'
  children: string
  addClassName?: string
}
function Typo({ type, children, addClassName }: TypoType) {
  return (
    <>
      {type === 'title' && (
        <h2 css={titleStyle} className={addClassName}>
          {children}
        </h2>
      )}
      {type === 'subTitle' && (
        <h3 css={subTitleStyle} className={addClassName}>
          {children}
        </h3>
      )}
      {type === 'text' && (
        <p css={textStyle} className={addClassName}>
          {children}
        </p>
      )}
    </>
  )
}

const titleStyle = css`
  font-size: 20rem;
  text-align: center;
  color: ${COLORS.DarkBlack};
`

const subTitleStyle = css`
  font-size: 18rem;
  text-align: center;
  color: ${COLORS.DarkBlack};
`
const textStyle = css`
  margin-top: 10rem;
  font-size: 16rem;
  text-align: center;
  color: ${COLORS.SecondGray};
`
export default memo(Typo)
