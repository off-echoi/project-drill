import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';
import { theme } from 'styles/theme';

const meta = {
  title: 'general/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    as: {
      options: ['', 'span', 'p', 'div', 'h1'],
    },
    color: {
      options: [...Object.values(theme.color)],
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Headding1: Story = {
  args: {
    typoType: 'heading1',
    children: 'heading1 입니다.',
  },
};
export const Headding2: Story = {
  args: {
    typoType: 'heading2',
    children: 'heading2 입니다.',
  },
};
export const Headding3: Story = {
  args: {
    typoType: 'heading3',
    children: 'heading3 입니다.',
  },
};
export const Sub1: Story = {
  args: {
    typoType: 'sub1',
    children: 'sub1 입니다.',
  },
};
export const Sub2: Story = {
  args: {
    typoType: 'sub2',
    children: 'sub2 입니다.',
  },
};
export const Sub3: Story = {
  args: {
    typoType: 'sub3',
    children: 'sub3 입니다.',
  },
};
export const Body1: Story = {
  args: {
    as: 'span',
    typoType: 'body1',
    children: 'body1 입니다.',
  },
};
export const Body2: Story = {
  args: {
    typoType: 'body2',
    children: 'body2 입니다.',
  },
};
export const Body3: Story = {
  args: {
    typoType: 'body3',
    children: 'body3 입니다.',
  },
};
export const Caption1: Story = {
  args: {
    typoType: 'caption1',
    children: 'caption1 입니다.',
  },
};
export const Caption2: Story = {
  args: {
    typoType: 'caption2',
    children: 'caption2 입니다.',
  },
};
export const Caption3: Story = {
  args: {
    typoType: 'caption3',
    children: 'caption3 입니다.',
  },
};
