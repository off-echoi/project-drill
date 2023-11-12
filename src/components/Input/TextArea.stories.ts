import type { Meta, StoryObj } from '@storybook/react';
import { TextArea } from 'components';

const meta = {
  title: 'forms/textarea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defult: Story = {
  args: {
    width: '100%',
  },
};
