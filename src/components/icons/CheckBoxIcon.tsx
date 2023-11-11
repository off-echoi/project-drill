import { RiCheckboxFill, RiCheckboxBlankLine } from 'react-icons/ri';
import { InputIconProps } from './icon';

export const CheckBoxIcon = ({ size = '30', color = '#555', checked = false, className = '' }: InputIconProps) => {
  const CheckBoxIconComponent = checked ? RiCheckboxFill : RiCheckboxBlankLine;
  return CheckBoxIconComponent({ size, color, className });
};
