import type { Meta, StoryObj } from '@storybook/react';
import { NoContent } from 'components';

const meta = {
  title: 'layout/NoContent',
  component: NoContent,
  tags: ['autodocs'],
} satisfies Meta<typeof NoContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
