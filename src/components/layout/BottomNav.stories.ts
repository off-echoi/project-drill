import type { Meta, StoryObj } from '@storybook/react';
import { BottomNav } from 'components';

const meta = {
  title: 'layout/BottomNav',
  component: BottomNav,
} satisfies Meta<typeof BottomNav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
