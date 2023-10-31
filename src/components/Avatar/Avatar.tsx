/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from 'constants/colors'
import { memo, ReactElement } from 'react'

type AvatarType = {
  children?: ReactElement<HTMLImageElement>
  name: string
  date?: string // 클래스 날짜
  type?: 'list' | 'photo'
}

function Avatar({ children, name, date, type = 'photo' }: AvatarType) {
  return (
    <div css={() => style(type)}>
      <div className="img_wrap">{children}</div>
      <div className="member_info">
        <span className="member_name">{name}</span>
        {date && <span className="member_schedule">{date}</span>}
      </div>
    </div>
  )
}

const style = (type: 'list' | 'photo') => {
  let addStyle = ''
  if (type === 'list') {
    addStyle = `
      display: flex;
      align-items: center;
      text-align: left;
      .img_wrap {
        width: 60rem;
        height: 60rem;
        margin: 0;
      }
      .member_info{
        margin-left:10rem;
      }
      .member_name {
        margin-top: 0;
      }
    `
  } else {
    addStyle = `
      text-align: center;
    `
  }
  const commonstyle = css`
    .img_wrap {
      overflow: hidden;
      width: 80rem;
      height: 80rem;
      margin: 0 auto;
      border-radius: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .member_name {
      display: block;
      font-size: 16rem;
      margin-top: 10rem;
    }
    .member_schedule {
      display: block;
      font-size: 14rem;
      margin-top: 5rem;
      color: ${COLORS.SecondGray};
    }
    ${addStyle}
  `
  return commonstyle
}

export default memo(Avatar)
