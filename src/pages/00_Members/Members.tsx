import { Link } from 'react-router-dom'

export default function Members() {
  return (
    <div>
      <p></p>
      <h3>관리할 사용자를 고르세요.</h3>
      <ul className="member_list_wrap">
        <li className="member_list">
          <Link to="/main">
            <img src="" alt="회원 1 사진" />
          </Link>
        </li>
      </ul>
    </div>
  )
}
