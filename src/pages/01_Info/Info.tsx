/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Avatar, Button, InfoTable } from '@components/index'
import Header from '@layouts/Header'
import ProfileImg from '@assets/profile01.jpg'
import { ReactComponent as Setting } from '@assets/icon_setting.svg'

function Info() {
  return (
    <>
      <Header pageName="회원정보">
        <Button type="icon" onClick={() => console.log('이동')} addClassName="btn_gray">
          <Setting />
          <span className="hidden">회원 정보 수정</span>
        </Button>
      </Header>
      <section className="header_section" css={style}>
        <div className="avartar_wrap">
          <Avatar name="김회원">
            <img src={ProfileImg} alt="프로필 이미지" />
          </Avatar>
        </div>
        <InfoTable>
          <tbody>
            <tr>
              <th>시간 </th>
              <td>월, 수 17:00 ~ 19:00</td>
            </tr>
            <tr>
              <th>과목 </th>
              <td>영어</td>
            </tr>
            <tr>
              <th>정보 </th>
              <td>대와중학교 3학년</td>
            </tr>
            <tr>
              <th>기타</th>
              <td>기타 메모사항</td>
            </tr>
          </tbody>
        </InfoTable>
      </section>
    </>
  )
}
const style = css`
  .avartar_wrap {
    margin: 40rem 0 20rem;
  }
`
export default Info
