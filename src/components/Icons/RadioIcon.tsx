import { RiRadioButtonLine, RiRadioButtonFill } from 'react-icons/ri';
import { InputIconProps } from '../components';

export const RadioIcon = ({ size = '30', color = '#555', checked = false }: InputIconProps) => {
  const RadioIconIconComponent = checked ? RiRadioButtonFill : RiRadioButtonLine;
  return RadioIconIconComponent({ size, color });
};
