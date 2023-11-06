import { RiArrowRightSLine, RiArrowDownSLine, RiArrowLeftSLine, RiArrowUpSLine } from 'react-icons/ri';
import { IconType } from 'react-icons';
import { DirectionIconProps, DirectionType } from '../components';

export const ArrowIcon = ({ size = '30', color = '#555', direction = 'top' }: DirectionIconProps) => {
  const IconComponent: Record<DirectionType, IconType> = {
    left: RiArrowLeftSLine,
    right: RiArrowRightSLine,
    top: RiArrowUpSLine,
    down: RiArrowDownSLine,
  };

  return IconComponent[direction]({ size, color });
};
