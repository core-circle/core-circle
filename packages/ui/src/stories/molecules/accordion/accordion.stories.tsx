import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../../components/molecules/accordion/accordion';
import { Info, SettingsIcon, Bell } from '@core-circle/icons';

const meta: Meta<typeof Accordion> = {
  title: 'Molecules/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['single', 'multiple'],
    },
    variant: {
      control: 'select',
      options: ['bordered', 'ghost', 'separated'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger startIcon={<Info size={18} />}>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It adheres to the WAI-ARIA design pattern. It supports keyboard navigation and screen readers.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger startIcon={<SettingsIcon size={18} />}>Can it be customized?</Accordion.Trigger>
        <Accordion.Content>
          Absolutely! You can customize the styles, animations, and even use your own custom triggers and icons.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger startIcon={<Bell size={18} />}>Does it support animations?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It uses CSS transitions for smooth height expansion and opacity fades for a premium feel.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
  args: {
    type: 'single',
    variant: 'bordered',
  },
};

export const Separated: Story = {
  render: (args) => (
    <Accordion {...args}>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section One</Accordion.Trigger>
        <Accordion.Content>Content for section one.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section Two</Accordion.Trigger>
        <Accordion.Content>Content for section two.</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
  args: {
    variant: 'separated',
  },
};
