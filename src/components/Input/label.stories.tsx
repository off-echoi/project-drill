import type { Meta, StoryObj } from '@storybook/react';
import { InputV2 } from 'components';
import { Label } from 'components';

const meta = {
  title: 'forms/Label',
  component: Label,
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Defult: Story = {
  args: { children: '라벨' },
};

export const WithInput: Story = {
  render: () => (
    <>
      <Label htmlFor="somInputId">라벨</Label>
      <InputV2 id="somInputId" />
    </>
  ),
};
