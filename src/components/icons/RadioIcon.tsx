import { RiRadioButtonLine, RiRadioButtonFill } from 'react-icons/ri';
import { InputIconProps } from './icon';

export const RadioIcon = ({ size = '30', color = '#555', checked = false, className = '' }: InputIconProps) => {
  const RadioIconIconComponent = checked ? RiRadioButtonFill : RiRadioButtonLine;
  return RadioIconIconComponent({ size, color, className });
};
