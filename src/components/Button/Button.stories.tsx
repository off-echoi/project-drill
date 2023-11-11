import type { Meta, StoryObj } from '@storybook/react';
import { ButtonV2 } from 'components';

const meta = {
  title: 'button/Button',
  component: ButtonV2,
  tags: ['autodocs'],
  argTypes: {
    rounded: {
      options: ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'full'],
      control: { type: 'select' },
    },
    as: { control: { type: 'select' } },
    color: { control: { type: 'select' } },
    size: { control: { type: 'select' } },
  },
} satisfies Meta<typeof ButtonV2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'mini',
    width: 'full',
    color: 'primary',
    children: '버튼',
    disabled: false,
    rounded: 'xl',
    isTextButton: false,
  },
};
