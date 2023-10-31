/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import COLORS from 'constants/colors'
import { useCallback } from 'react'
import { Avatar, Typo } from 'components/index'
import Header from 'layouts/Header'
import ProfileImage1 from 'assets/profile01.jpg'
import ProfileImage3 from 'assets/profile03.jpg'
import ProfileImage4 from 'assets/profile04.jpg'
import ProfileImage5 from 'assets/profile05.jpg'

function MemberDelete() {
  const deleteMembers = useCallback((name: string) => {
    const response = window.confirm(`${name}회원을 삭제하시겠습니까?`)
    if (response) {
      alert(`${name}회원이 삭제되었습니다.`)
    } else {
      alert(`회원 삭제 페이지로 돌아갑니다.`)
    }
  }, [])
  return (
    <>
      <Header pageName="회원삭제" type="back" />
      <section css={style} className="header_section ">
        <Typo type="text" addClassName="text">
          삭제할 회원을 고르세요.
        </Typo>
        <ul className="member_list_wrap">
          <li className="member_list">
            <Avatar name="김회원">
              <img src={ProfileImage1} alt="이미지" />
            </Avatar>
            <button className="btn_delete" onClick={() => deleteMembers('김회원')}>
              <span className="hidden">김회원 삭제</span>
            </button>
          </li>
          <li className="member_list">
            <Avatar name="박원">
              <img src={ProfileImage3} alt="이미지" />
            </Avatar>
            <button className="btn_delete" onClick={() => deleteMembers('박원')}>
              <span className="hidden">박원 삭제</span>
            </button>
          </li>
          <li className="member_list">
            <Avatar name="이아름">
              <img src={ProfileImage4} alt="이미지" />
            </Avatar>
            <button className="btn_delete" onClick={() => deleteMembers('이아름')}>
              <span className="hidden">이아름 삭제</span>
            </button>
          </li>
          <li className="member_list">
            <Avatar name="공진원">
              <img src={ProfileImage5} alt="이미지" />
            </Avatar>
            <button className="btn_delete" onClick={() => deleteMembers('공진원')}>
              <span className="hidden">공진원 삭제</span>
            </button>
          </li>
        </ul>
      </section>
    </>
  )
}

const style = css`
  .text {
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
    position: relative;
    margin-top: 20rem;
  }
  .btn_delete {
    position: absolute;
    z-index: 1;
    width: 20rem;
    height: 20rem;
    background: ${COLORS.PrimaryBlue};
    border-radius: 100%;
    top: 0;
    right: 0;
    line-height: 0;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      display: block;
      width: 8rem;
      height: 2rem;
      margin: -1rem 0 0 -4rem;
      border-radius: 10rem;
      background: #fff;
    }
  }
`

export default MemberDelete
