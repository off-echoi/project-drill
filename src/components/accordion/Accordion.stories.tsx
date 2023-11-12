import type { Meta, StoryFn } from '@storybook/react';
import { Accordion, AccordionItem, AccordionContent } from 'components';

const meta = {
  title: 'general/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;

const Template: StoryFn<typeof meta> = args => (
  <Accordion {...args} initialExpandedItems={['panel1']}>
    <AccordionItem accordionId="panel1" title="Panel 1">
      <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
        anim id est laborum.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem accordionId="panel2" title="Panel 2 ">
      <AccordionContent>Content 2</AccordionContent>
    </AccordionItem>
    <AccordionItem
      accordionId="panel3"
      title="Lorem ipsum dolor sit amet,\n consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">
      <AccordionContent>Content 3</AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default = {
  render: Template,
};
