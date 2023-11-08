import { RiImageLine } from 'react-icons/ri'
import { IconBaseProps } from 'react-icons'

export const ImageIcon = ({ size = '30', color = '#555' }: IconBaseProps) => {
  return <RiImageLine size={size} color={color} />
}
