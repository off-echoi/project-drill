import { memo } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <Link to="">다른 학생링크로 이동</Link>
    </header>
  )
}
export default memo(Header)
