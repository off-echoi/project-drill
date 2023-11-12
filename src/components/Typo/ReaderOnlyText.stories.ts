import type { Meta, StoryObj } from '@storybook/react';
import { ReaderOnlyText } from './ReaderOnlyText';

const meta = {
  title: 'general/Typography',
  component: ReaderOnlyText,
} satisfies Meta<typeof ReaderOnlyText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ReaderOnly: Story = {
  args: {
    children: '스크린 리더기 읽기 전용 텍스트',
  },
};
