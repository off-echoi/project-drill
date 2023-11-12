import type { Meta, StoryFn } from '@storybook/react';
import { CheckBox } from 'components';
import { useState } from 'react';

const meta = {
  title: 'forms/checkbox',
  component: CheckBox,
  tags: ['autodocs'],
} satisfies Meta<typeof CheckBox>;

export default meta;

const Template: StoryFn = args => {
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <CheckBox id="default" labelContent="라벨" value="default" name="defaultRadioGroup" onChange={onChangeHandler} checked={checked} {...args} />
  );
};

export const Default = {
  render: Template,
};
