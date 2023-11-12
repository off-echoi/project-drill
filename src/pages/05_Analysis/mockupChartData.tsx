import { theme } from 'styles/theme';

export const scoreChartData = {
  labels: ['3월', '4월', '5월', '6월', '7월', '9월'],
  datasets: [
    {
      label: '영어 모의고사 점수',
      data: [80, 78, 83, 90, 88, 91],
      borderColor: theme.color.primary1,
      backgroundColor: theme.color.primary1,
    },
  ],
};
