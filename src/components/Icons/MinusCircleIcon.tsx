import { RiIndeterminateCircleLine, RiIndeterminateCircleFill } from 'react-icons/ri'
import { FillIconProps } from './icon'

export const MinusCircleIcon = ({ size = '30', color = '#555', fill = false }: FillIconProps) => {
  const MinusCircleIconComponent = fill ? RiIndeterminateCircleFill : RiIndeterminateCircleLine
  return MinusCircleIconComponent({ size, color })
}
