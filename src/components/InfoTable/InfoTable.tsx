/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from 'constants/colors'
import { memo, ReactElement } from 'react'

type InfoTableType = {
  addClassName?: string
  children?: ReactElement<HTMLTableCellElement> | ReactElement<HTMLTableCellElement>[]
}

function InfoTable({ addClassName, children }: InfoTableType) {
  return (
    <table css={style} className={addClassName}>
      {children}
    </table>
  )
}

const style = css`
  max-width: 70%;
  margin: 0 auto;
  font-size: 15rem;
  tr + tr {
    border-top: 1px solid ${COLORS.SecondGray};
  }
  td,
  th {
    padding: 10rem;
  }
  th {
    min-width: 50rem;
    max-width: 100rem;
    width: auto;
    text-align: left;
  }
`
export default memo(InfoTable)
