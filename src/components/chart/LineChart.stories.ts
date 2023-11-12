import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from 'components';
import { theme } from 'styles/theme';

const meta = {
  title: 'chart/LineChart',
  component: LineChart,
  tags: ['autodocs'],
} satisfies Meta<typeof LineChart>;

export default meta;

type Story = StoryObj<typeof meta>;

const data = {
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

export const Empty: Story = {
  args: {
    chartData: data,
  },
};
