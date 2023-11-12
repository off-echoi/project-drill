import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from 'components';

const meta = {
  title: 'general/Logo',
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    $size: 'normal',
    $direction: 'column',
    withText: true,
  },
};
