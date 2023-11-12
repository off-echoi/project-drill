import dayjs, { Dayjs } from 'dayjs';

// 함수의 인자로 넣는 날짜 형식
type DatePatternType = Date | string | Dayjs;

// 포멧팅 가능한 형식
type DateFormatType = 'YYYY-MM-DD' | 'M.D' | 'M.D(ddd)';

/**
 * 오늘 가져오는 함수
 * @returns 오늘 날짜(dayjs)
 */
export const getToday = (): Dayjs => {
  return dayjs();
};
/**
 * 날짜 포멧팅해주는 함수
 * @param fullDate 날짜 20230102
 * @param format 어떤 형식으로 포멧팅 할지
 * @returns 포멧팅 된 날짜 형식
 */
export const formattingDate = (fullDate: DatePatternType = new Date(), format: DateFormatType = 'YYYY-MM-DD'): string => {
  return dayjs(fullDate).format(format);
};
/**
 * 날짜 차이 계산하는 함수
 */
export const getDiffDates = (baseDate: DatePatternType, diffDate: DatePatternType): number => {
  // 며칠 차이
  return dayjs(baseDate).diff(diffDate, 'day');
};
