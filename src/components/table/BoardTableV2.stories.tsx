import type { Meta, StoryObj } from '@storybook/react';
import { BoardTableV2, Typography } from 'components';

const meta = {
  title: 'table/BoardTable',
  component: BoardTableV2,
  tags: ['autodocs'],
} satisfies Meta<typeof BoardTableV2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defult: Story = {
  args: {
    tableData: [
      { title: '제목', content: '안녕하세요.' },
      {
        title: '내용',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      { title: '기타', content: <Typography typotype="heading1">Typography</Typography> },
    ],
    columnSize: ['30%', 'auto'],
    tabletheme: 'primary',
  },
};
