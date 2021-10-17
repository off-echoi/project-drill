import { memo } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav>
      <section>내 프로필?</section>
      <ul>
        <li>
          <Link to="/">메뉴?</Link>
        </li>
      </ul>
    </nav>
  )
}
export default memo(Nav)
