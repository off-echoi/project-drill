/**
 *
 * @param condition 조건
 * @param trueStyle 조건이 ture 일때 return
 * @param falsyStyle 조건이 false 일때 return
 * @returns trueStyle 혹은 falsyStyle
 */
export const getStyleBasedOnCondition = <StyleType>(condition: boolean, trueStyle: StyleType, falsyStyle: StyleType): StyleType => {
  let style = condition ? trueStyle : falsyStyle;
  return style;
};
