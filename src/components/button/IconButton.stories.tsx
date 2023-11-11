import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, MenuIcon } from 'components';

const meta = {
  title: 'button/IconButton',
  component: IconButton,
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const AsButton: Story = {
  args: {
    label: '사이드 열기',
    icon: <MenuIcon />,
    size: 'medium',
  },
};

export const AsLink: Story = {
  args: {
    label: '사이드 열기',
    icon: <MenuIcon />,
    as: 'Link',
    to: '/',
  },
};

export const AsOutLink: Story = {
  args: {
    label: '사이드 열기',
    icon: <MenuIcon />,
    as: 'a',
    href: '/',
  },
};
