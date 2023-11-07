/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import COLORS from 'constants/colors';
import { Fragment, memo } from 'react';

type TypoType = {
  type: 'title' | 'subTitle' | 'text' | 'pageNotice';
  children: string;
  addClassName?: string; // ** TODO: 삭제 예정
};

export const Typo = ({ type, children, addClassName }: TypoType) => {
  return (
    <>
      {type === 'title' && (
        <h2 css={titleStyle} className={addClassName}>
          {children}
        </h2>
      )}
      {type === 'subTitle' && (
        <h3 css={subTitleStyle} className={addClassName}>
          {children}
        </h3>
      )}
      {type === 'text' && (
        <p css={textStyle} className={addClassName}>
          {children &&
            children.split('\\n').map((line, i) => {
              return (
                <Fragment key={i}>
                  {line}
                  <br />
                </Fragment>
              );
            })}
        </p>
      )}

      {type === 'pageNotice' && (
        <p css={pageNoticeStyle} className={addClassName}>
          {children &&
            children.split('\\n').map((line, i) => {
              return (
                <Fragment key={i}>
                  {line}
                  <br />
                </Fragment>
              );
            })}
        </p>
      )}
    </>
  );
};

const titleStyle = css`
  font-size: 20rem;
  text-align: center;
  color: ${COLORS.DarkBlack};
`;

const subTitleStyle = css`
  font-size: 18rem;
  text-align: center;
  color: ${COLORS.DarkBlack};
`;
const textStyle = css`
  margin-top: 10rem;
  font-size: 16rem;
  text-align: center;
  line-height: 1.4;
  color: ${COLORS.SecondGray};
`;
const pageNoticeStyle = css`
  margin: 20rem 0;
  font-size: 16rem;
  text-align: center;
  line-height: 1.4;
  color: ${COLORS.SecondGray};
`;
export default memo(Typo);
