import { DirectionType, SizeType } from 'components/varient';
import { DrillIcon } from 'components';
import styled from 'styled-components';
import { theme } from 'styles/theme';
type LogoSizeType = 'main' | Extract<SizeType, 'large' | 'normal' | 'small'>;
interface LogoProps {
  $size?: LogoSizeType;
  $direction?: DirectionType;
  withText?: boolean;
}

const StyledLogo = styled.div<LogoProps>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  ${({ $direction }) => $direction === 'column' && `flex-direction: column;`}
  .logo_typo {
    font-size: ${({ $size }) => {
      const sizeStyle: Record<LogoSizeType, string> = {
        main: '30px',
        large: theme.typography.size.lg,
        normal: theme.typography.size.sm,
        small: theme.typography.size.xxs,
      };
      return sizeStyle[$size as LogoSizeType];
    }};
    font-weight: ${theme.typography.weight.black};
    color: ${theme.color.gray3};
    span {
      font: inherit;
      color: ${theme.color.primary1};
    }
  }
`;

export const Logo = ({ $size = 'normal', $direction = 'column', withText = true }: LogoProps) => {
  const sizeType = {
    main: '100',
    large: '50',
    normal: '30',
    small: '20',
  };
  return (
    <>
      {withText ? (
        <StyledLogo $size={$size} $direction={$direction}>
          <DrillIcon size={sizeType[$size as LogoSizeType]} />
          <p className="logo_typo">
            D<span>R</span>IIL
          </p>
        </StyledLogo>
      ) : (
        <DrillIcon size={sizeType[$size as LogoSizeType]} aria-label="드릴 앱 아이콘" />
      )}
    </>
  );
};
