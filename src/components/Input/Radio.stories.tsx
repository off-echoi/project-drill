import type { Meta, StoryFn } from '@storybook/react';
import { Radio } from 'components';
import { useState } from 'react';

const meta = {
  title: 'forms/radio',
  component: Radio,
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;

const Template: StoryFn = args => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return <Radio id="default" labelContent="라벨" value="default" name="defaultRadioGroup" onChange={onChangeHandler} checked={checked} {...args} />;
};

export const Default = {
  render: Template,
};
