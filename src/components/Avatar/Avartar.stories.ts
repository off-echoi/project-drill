import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'components/avatar/Avatar';

const meta = {
  title: 'general/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

const dummySrc = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=1961&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const Empty: Story = {
  args: {
    direction: 'column',
    src: '',
  },
};

export const Photo: Story = {
  args: {
    direction: 'column',
    src: dummySrc,
  },
};

export const Profile: Story = {
  args: {
    direction: 'column',
    src: dummySrc,
    name: '김유저',
  },
};
