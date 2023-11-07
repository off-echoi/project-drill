import { Fragment, ReactNode } from 'react';

/**
 * 유효한 문자열인지 판단(=빈문자열이 아닌지 판단)
 * @param text
 * @returns boolean
 */

export const isValidString = (text: string): boolean => {
  return Boolean(text) && text.length > 0 && text.trim() !== '';
};

/**
 * \n을 <br/>로 줄바꿈하여 리액트 dom(Fragment)으로 반환
 * @param text
 * @returns ReactNode
 */
export const replaceNewLineToBr = (text: string): ReactNode => {
  if (!isValidString(text)) return `${(<></>)}`;

  if (text.includes('<br/>') || text.includes('<br />') || text.includes('<br>')) {
    return <Fragment>{text}</Fragment>;
  }

  return text.split('\\n').map((word, idx) => (
    <Fragment key={idx}>
      {word}
      <br />
    </Fragment>
  ));
};
