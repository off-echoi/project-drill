import { memo } from 'react'

type avatarType = {
  alt: string
  src: string
  name: string
  date?: string
}

function Avatar({ alt, src, name, date }: avatarType) {
  return (
    <div>
      <img src={src} alt={alt} />
      <span>{name}</span>
      {date && <span>{date}</span>}
    </div>
  )
}

export default memo(Avatar)
