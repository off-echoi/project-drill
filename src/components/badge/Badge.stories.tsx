import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'components';

const meta = {
  title: 'general/Badge',
  component: Badge,
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
    $colorTheme: 'primary',
  },
};
