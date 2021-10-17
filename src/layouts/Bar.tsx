import React, { memo } from 'react'
import { Link } from 'react-router-dom'

function Bar() {
  return (
    <section className="bar">
      <ul>
        <li>
          <Link to="/test">과제</Link>
        </li>
        <li>
          <Link to="/test">질문</Link>
        </li>
        <li>
          <Link to="/test">정보</Link>
        </li>
        <li>
          <Link to="/test">공지</Link>
        </li>
        <li>
          <Link to="/test">분석</Link>
        </li>
      </ul>
    </section>
  )
}
export default memo(Bar)
