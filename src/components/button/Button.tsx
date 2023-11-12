/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import COLORS from 'constants/colors';
import { forwardRef, ReactNode, ForwardRefExoticComponent, RefAttributes } from 'react';
import styled from 'styled-components';
import { Link, LinkProps } from 'react-router-dom';

type ButtonElementType = HTMLButtonElement | Omit<LinkProps, 'to'> | HTMLAnchorElement;
type ButtonProps = ButtonElementType & {
  href?: string;
  children: ReactNode | string;
  type?: any; // ** TODO: 삭제 예정
  addClassName?: string; // ** TODO: 삭제 예정
  to?: string; // ** TODO: 삭제 예정
};
// interface ButtonProps extends ButtonElementType{
//   href?:string
//   children: ReactNode | string
// }

const defaultButtonStyle = `
`;

const StyledLink = styled(Link)`
  ${defaultButtonStyle}
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  font-weight: ${(props) => (props ? 'bold' : 'normal')};
`;
const StyledButton = styled.button`
  ${defaultButtonStyle}
  box-sizing: border-box;
  display: block;
  padding: 4px 8px;
  margin: 0 auto;
  text-align: center;
  font-weight: ${(props) => (props ? 'bold' : 'normal')};
`;

const fullStyle = css`
  width: 100%;
  height: 50rem;
  background: ${COLORS.PrimaryBlue};
  font-size: 16rem;
  color: #fff;
  &:disabled {
    background: ${COLORS.SecondGray};
  }
`;
const fullFixStyle = css`
  position: fixed;
  z-index: 20;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50rem;
  background: ${COLORS.PrimaryBlue};
  font-size: 16rem;
  color: #fff;
  &:disabled {
    background: ${COLORS.SecondGray};
  }
`;
const iconStyle = css`
  width: 44rem;
  height: 44rem;
  svg {
    width: 25rem;
    height: 25rem;
    fill: ${COLORS.PrimaryBlue};
  }
  &.btn_gray svg {
    width: 20rem;
    height: 20rem;
    fill: ${COLORS.SecondGray};
  }
`;

const Button = forwardRef<ButtonElementType, ButtonProps>(({ href, children, ...props }, ref) => {
  return (
    <>
      {/* <StyledButton className={props.className} {...props} /> */}

      {/*{type === 'full' && (*/}
      {/*  <button onClick={onClick} className={props.clasName} disabled={disabled} css={fullStyle}>*/}
      {/*    {children}*/}
      {/*  </button>*/}
      {/*)}*/}
      {/*{type === 'fullFix' && (*/}
      {/*  <button onClick={onClick} className={addClassName} disabled={disabled} css={fullFixStyle}>*/}
      {/*    {children}*/}
      {/*  </button>*/}
      {/*)}*/}
      {/*{type === 'icon' && (*/}
      {/*  <button onClick={onClick} className={addClassName} css={iconStyle}>*/}
      {/*    {children}*/}
      {/*  </button>*/}
      {/* )} */}
    </>
  );
});

export default Button;
