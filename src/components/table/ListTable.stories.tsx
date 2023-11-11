import type { Meta, StoryObj } from '@storybook/react';
import { ListTable } from 'components';

const meta = {
  title: 'table/ListTable',
  component: ListTable,
  tags: ['autodocs'],
} satisfies Meta<typeof ListTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defult: Story = {
  args: {
    tableData: [
      { title: '제목1', date: '2021-01-02', idx: 1 },
      {
        title:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2021-01-01',
        idx: 2,
        linkTo: '/some/1',
      },
      {
        title:
          'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: '2021-01-01',
        idx: 2,
        linkTo: '/some/1',
      },
    ],
    columnTitle: [
      { column: '제목', size: 'auto' },
      { column: '날짜', size: '120px' },
    ],
  },
};
