import { IconBaseProps } from 'react-icons';
import { TiWeatherWindy } from 'react-icons/ti';
import { theme } from 'styles/theme';
// FaHillRockslide
export const DrillIcon = ({ size = '30' }: IconBaseProps) => {
  return <TiWeatherWindy color={theme.color.primary1} size={size} />;
};
