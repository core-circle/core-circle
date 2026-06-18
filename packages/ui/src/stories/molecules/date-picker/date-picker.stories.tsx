import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from '../../../components/molecules/date-picker/date-picker';

const meta: Meta<typeof DatePicker> = {
  title: 'Molecules/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Select Date',
    placeholder: 'Pick a day',
  },
};

export const Controlled: Story = {
  render: function Render() {
    const [date, setDate] = useState<Date | undefined>(new Date());
    return (
      <div className="h-[400px]">
        <DatePicker 
          label="Controlled Date" 
          value={date} 
          onChange={setDate} 
        />
        <p className="mt-4 text-sm text-core-circle-text-muted">
          Selected: {date?.toDateString()}
        </p>
      </div>
    );
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Picker',
    disabled: true,
    value: new Date(),
  },
};
