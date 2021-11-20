/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from '@constants/colors'
import { memo, ReactElement } from 'react'

type BoardTableType = {
  addClassName?: string
  children?: ReactElement<HTMLTableCellElement> | ReactElement<HTMLTableCellElement>[]
}

function BoardTable({ addClassName, children }: BoardTableType) {
  return (
    <table css={style} className={addClassName}>
      {children}
    </table>
  )
}

const style = css`
  width: 100%;
  font-size: 15rem;
  tr + tr {
    border-top: 1px solid ${COLORS.SecondGray};
  }
  td,
  th {
    padding: 10rem;
  }
  th {
    width: 75rem;
    text-align: left;
  }
  td {
    word-break: keep-all;
    line-height: 1.4;
  }
`
export default memo(BoardTable)
