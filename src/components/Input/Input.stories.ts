import type { Meta, StoryObj } from '@storybook/react';
import { InputV2 } from 'components';

const meta = {
  title: 'forms/Input',
  component: InputV2,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof InputV2>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defult: Story = {
  args: {
    type: 'text',
    width: '100%',
  },
};
