function InfoSetting() {
  return (
    <section>
      <div>
        avatar
        {/* img 컴포넌트 */}
        <span>김뫄뫄</span>
        <span>2006. 10. 22</span>
      </div>
      <table>
        <tr>
          <th>시간 : </th>
          <td>체크박스 웛,화,수,목,금 레인지 시간</td>
        </tr>
        <tr>
          <th>과목 : </th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <th>정보 : </th>
          <td>
            <input type="text" />
          </td>
        </tr>
        <tr>
          <td rowSpan={2}>
            <textarea name="" id=""></textarea>
          </td>
        </tr>
      </table>
    </section>
  )
}

export default InfoSetting
