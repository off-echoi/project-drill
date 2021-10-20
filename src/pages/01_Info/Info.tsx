import { memo } from 'react'

import { Avatar } from '@components/index'

function Info() {
  return (
    <section>
      설정버튼
      <div>
        <Avatar alt="me1me" src="./" name="김뫄뫄" date="2006. 10. 20" />
      </div>
      <table>
        <tr>
          <th>시간 : </th>
          <td>월, 수 17:00 ~ 19:00</td>
        </tr>
        <tr>
          <th>과목 : </th>
          <td>영어</td>
        </tr>
        <tr>
          <th>정보 : </th>
          <td>뫄뫄중학교 3학년</td>
        </tr>
        <tr>
          <td rowSpan={2}>
            <p>기타 메모사항~~</p>
          </td>
        </tr>
      </table>
    </section>
  )
}

export default memo(Info)
