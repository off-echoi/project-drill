import { memo } from 'react'
import { NavLink } from 'react-router-dom'

function Bar() {
  return (
    <section className="bar">
      <ul>
        <li>
          <NavLink to="/test">과제</NavLink>
        </li>
        <li>
          <NavLink to="/test">질문</NavLink>
        </li>
        <li>
          <NavLink to="/test">정보</NavLink>
        </li>
        <li>
          <NavLink to="/test">공지</NavLink>
        </li>
        <li>
          <NavLink to="/test">분석</NavLink>
        </li>
      </ul>
    </section>
  )
}
export default memo(Bar)
