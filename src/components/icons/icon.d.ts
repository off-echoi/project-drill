import { IconBaseProps } from 'react-icons';

// 체크박스, 라디오버튼 등 인풋 관련 Icon
export type CheckedType = boolean;
export interface InputIconProps extends IconBaseProps {
  checked?: CheckedType;
}

// 위,아래,좌,우 방향있는 아이콘 타입(ex 화살표)
export type DirectionType = 'top' | 'down' | 'left' | 'right';
export interface DirectionIconProps extends IconBaseProps {
  direction?: DirectionType;
}

// 라인, 채우기 타입이 있는 아이콘
export type FillType = boolean;
export interface FillIconProps extends IconBaseProps {
  fill?: FillType;
}
