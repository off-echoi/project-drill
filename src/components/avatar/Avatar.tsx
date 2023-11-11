import { ReactNode } from 'react';
import styled, { useTheme } from 'styled-components';
import { UserIcon } from 'components';
import { DirectionType } from 'components/varient';
import { getStyleBasedOnCondition } from 'styles/styledUtils';
import { theme } from 'styles/theme';

interface AvatarProps {
  src?: string;
  name?: string;
  direction?: DirectionType;
  children?: ReactNode;
  date?: string; // ** TODO: 삭제 예정
  type?: string; // ** TODO: 삭제 예정
}

const StyledAvatarWrap = styled.div<Pick<AvatarProps, 'direction'>>`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  flex-direction: ${({ direction }) => direction};
`;

const StyledImageWrap = styled.div<Pick<AvatarProps, 'src'>>`
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  ${({ src }) =>
    getStyleBasedOnCondition(
      //
      Boolean(src),
      `background-color: ${theme.color.white};`,
      `background-color:  ${theme.color.gray9};
       line-height : 50px;
       color: ${theme.color.secondary1};
       font-size: ${theme.typography.size.xxl};
       font-weight: ${theme.typography.weight.black};
      `
    )}
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  svg {
    margin-top: ${theme.spacing.lg};
  }
`;

const StyledInfoText = styled.span<Pick<AvatarProps, 'direction'>>`
  display: block;
  font-size: ${theme.typography.size.md};
  font-weight: ${theme.typography.weight.bold};
  text-align: ${({ direction }) => (direction === 'column' ? `center;` : `left;`)};
`;

export const Avatar = ({ src = '', direction = 'column', name = '', children }: AvatarProps) => {
  const theme = useTheme();
  return (
    <>
      {!src && !name ? (
        <StyledImageWrap>
          <UserIcon size="25" color={theme.color.primary2} />
        </StyledImageWrap>
      ) : (
        <StyledAvatarWrap direction={direction}>
          <StyledImageWrap>
            {src && <img src={src} alt={`${name} 프로필`} />}
            {name && <>{name[0]}</>}
          </StyledImageWrap>
          {name && <StyledInfoText direction={direction}>{name}</StyledInfoText>}
          {children}
        </StyledAvatarWrap>
      )}
    </>
  );
};
