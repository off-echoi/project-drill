import { RiSurveyLine } from 'react-icons/ri'
// import { RiPagesLine } from 'react-icons/ri'
// RiListCheck3
import { IconBaseProps } from 'react-icons'

export const TaskIcon = ({ size = '30', color = '#555' }: IconBaseProps) => {
  return <RiSurveyLine size={size} color={color} />
}
