/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Typo } from '@components/index'
import ProfileImage from '@assets/profile01.jpg'

function Members() {
  return (
    <div css={style}>
      <Typo type="title" addClassName="title">
        안녕하세요! 가가님
      </Typo>
      <Typo type="text">관리할 회원을 고르세요.</Typo>
      <ul className="member_list_wrap">
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="회원1">
              <img src={ProfileImage} alt="이미지" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="회원2">
              <img src={ProfileImage} alt="이미지" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="회원3">
              <img src={ProfileImage} alt="이미지" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="회원4">
              <img src={ProfileImage} alt="이미지" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <button className="add_member" onClick={() => alert('준비중인 기능입니다.')}>
            회원추가
          </button>
        </li>
      </ul>
    </div>
  )
}

const style = css`
  .title {
    margin-top: 20rem;
  }
  .member_list_wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
  }
  .member_list {
    margin-top: 20rem;
  }
  .add_member {
    width: 80rem;
    height: 80rem;
    border-radius: 100%;
  }
`

export default memo(Members)
