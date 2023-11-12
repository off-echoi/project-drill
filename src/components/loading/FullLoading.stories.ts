import type { Meta, StoryObj } from '@storybook/react';
import { FullLoading } from './FullLoading';

const meta = {
  title: 'loading/FullLoading',
  component: FullLoading,
} satisfies Meta<typeof FullLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
