import type { Meta, StoryObj } from '@storybook/react';
import { ContentLoading } from './ContentLoading';

const meta = {
  title: 'loading/ContentLoading',
  component: ContentLoading,
} satisfies Meta<typeof ContentLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
