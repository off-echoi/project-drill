import { RiAddCircleLine, RiAddCircleFill } from 'react-icons/ri';
import { FillIconProps } from './icon';

export const AddCircleIcon = ({ size = '30', color = '#555', fill = false }: FillIconProps) => {
  const AddCircleIconComponent = fill ? RiAddCircleFill : RiAddCircleLine;
  return AddCircleIconComponent({ size, color });
};
