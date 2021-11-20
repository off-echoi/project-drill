/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Typo } from '@components/index'
import ProfileImage1 from '@assets/profile01.jpg'
import ProfileImage3 from '@assets/profile03.jpg'
import ProfileImage4 from '@assets/profile04.jpg'
import ProfileImage5 from '@assets/profile05.jpg'
import COLORS from '@/constants/colors'

function Members() {
  return (
    <div css={style}>
      <Typo type="title" addClassName="title">
        안녕하세요! 최선생님
      </Typo>
      <Typo type="text">관리할 회원을 고르세요.</Typo>
      <ul className="member_list_wrap">
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="김회원">
              <img src={ProfileImage1} alt="김회원 회원" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="박원">
              <img src={ProfileImage3} alt="박원 회원" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="이아름">
              <img src={ProfileImage4} alt="이아름 회원" />
            </Avatar>
          </Link>
        </li>
        <li className="member_list">
          <Link to="/Info">
            <Avatar name="공진원">
              <img src={ProfileImage5} alt="공지원 회원" />
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
  padding-top: 20rem;
  .title {
    margin-top: 20rem;
  }
  .member_list_wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60%;
    margin: 0 auto;
  }
  .member_list {
    margin-top: 20rem;
  }
  .add_member {
    width: 80rem;
    height: 80rem;
    border-radius: 100%;
    background: ${COLORS.LightGray};
  }
`

export default memo(Members)
