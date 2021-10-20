import { memo } from 'react'
import { Link } from 'react-router-dom'

function Members() {
  return (
    <div>
      <h2>가가님의 회원</h2>
      <p>관리할 회원을 고르세요.</p>
      <ul className="member_list_wrap">
        <li className="member_list">
          <Link to="/main">
            <img src="" alt="회원 1 사진" />
          </Link>
        </li>
        <li className="member_list">
          <Link to="/main">
            <img src="" alt="회원 2 사진" />
          </Link>
        </li>
        <li className="member_list">
          <Link to="/main">
            <img src="" alt="회원 추가" />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default memo(Members)
